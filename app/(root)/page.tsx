"use client";
import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";
import { Userdetails } from "@/lib/queries";
import { getUser } from "@/lib/queries";
import { useUser } from "@clerk/nextjs";
import ThemeSelector from "./_components/ThemeSelector";
import RunButton from "./_components/RunButton";
import LanguageSelector from "./_components/LanguageSelector";
import FileExplorer from "@/components/FileExploer";
import React, { useState, useEffect } from "react";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { CopilotChat, CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import LivePreview from "@/components/LivePreview";
import io, { Socket } from "socket.io-client";

interface File {
  id: string;
  name: string;
  content: string;
}
export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [code, setCode] = useState<string>("// Select or create a file");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [fileContents, setFileContents] = useState<Record<string, string>>({});

  // Initialize socket connection
  useEffect(() => {
    const socketInstance = io("http://localhost:3000", {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socketInstance.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    // Handle real-time file updates
    socketInstance.on(
      "file-update",
      ({ fileId, content }: { fileId: string; content: string }) => {
        setFileContents((prev) => ({
          ...prev,
          [fileId]: content,
        }));

        if (currentFile && currentFile.id === fileId) {
          setCode(content);
        }
      }
    );

    socketInstance.on("new-file", (newFile: File) => {
      setFiles((prev) => [...prev, newFile]);
      setFileContents((prev) => ({
        ...prev,
        [newFile.id]: newFile.content,
      }));
    });

    socketInstance.on("delete-file", (fileId: string) => {
      setFiles((prev) => prev.filter((file) => file.id !== fileId));
      setFileContents((prev) => {
        const updated = { ...prev };
        delete updated[fileId];
        return updated;
      });
    });

    setSocket(socketInstance);

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [currentFile]);

  useCopilotReadable({
    description: "Current state of the workspace",
    value: {
      files: files.map((f) => f.name),
      currentFile: currentFile?.name,
      currentCode: code,
    },
  });

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/files");
      if (!response.ok) throw new Error("Failed to fetch files");
      const data: File[] = await response.json();

      // Store all file contents in state
      const contents: Record<string, string> = {};
      data.forEach((file) => {
        contents[file.id] = file.content;
      });

      setFiles(data);
      setFileContents(contents);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileSelect = async (file: File) => {
    setCurrentFile(file);

    // Use cached content if available
    if (fileContents[file.id]) {
      setCode(fileContents[file.id]);
    } else {
      try {
        const response = await fetch(`/api/files/${file.id}`);
        if (!response.ok) throw new Error("Failed to fetch file content");
        const data = await response.json();

        setFileContents((prev) => ({
          ...prev,
          [file.id]: data.content,
        }));
        setCode(data.content);
      } catch (error) {
        console.error("Error fetching file content:", error);
      }
    }
  };

  const handleCodeChange = async (value: string | undefined) => {
    if (!currentFile || !value) return;

    // Update local state immediately
    setCode(value);
    setFileContents((prev) => ({
      ...prev,
      [currentFile.id]: value,
    }));

    try {
      // Emit the change to other clients
      if (socket) {
        socket.emit("file-update", {
          fileId: currentFile.id,
          content: value,
        });
      }

      // Save to backend
      await fetch("/api/files", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: currentFile.id, content: value }),
      });
    } catch (error) {
      console.error("Error updating file:", error);
    }
  };

  const processFiles = async ({ response }: { response: string }) => {
    try {
      const filePattern =
        /FILE:\s*([\w.\-\/]+)\s*\nCODE:\s*([\s\S]*?)(?=\nFILE:|$)/g;
      let match;
      const newFiles: File[] = [];

      while ((match = filePattern.exec(response)) !== null) {
        const fileName = match[1].trim();
        const fileContent = match[2].trim();

        if (fileName && fileContent) {
          const res = await fetch("/api/files", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: fileName, content: fileContent }),
          });

          if (res.ok) {
            const savedFile: File = await res.json();
            newFiles.push(savedFile);

            // Update local state
            setFileContents((prev) => ({
              ...prev,
              [savedFile.id]: savedFile.content,
            }));

            // Emit new file to other clients
            if (socket) {
              socket.emit("new-file", savedFile);
            }
          }
        }
      }

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      return `Files saved successfully: ${newFiles
        .map((f) => f.name)
        .join(", ")}`;
    } catch (error) {
      console.error("Error processing files:", error);
      return "Failed to save files.";
    }
  };

  useCopilotAction({
    name: "processFiles",
    description: "Processes AI-generated files and saves them to Prisma",
    parameters: [{ name: "response", type: "string", required: true }],
    handler: processFiles,
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header />
        <div className="flex flex-row w-full gap-1">
          <div>
           
            <FileExplorer
              files={files}
              onFileSelect={handleFileSelect}
              currentFile={currentFile}
            />
          </div>
          <div>
            <EditorPanel
              selectedFile={currentFile}
              code={code}
              onChange={handleCodeChange}
            />
          </div>
          <LivePreview
            files={files}
            currentFile={currentFile}
            code={code}
            onCodeChange={handleCodeChange}
          />
          <CopilotPopup
            instructions={`
    You are an AI-powered code generator. Use the following actions:

    1. @processFiles - To create new files, use this format:
    @processFiles(response: \`
    FILE: filename.ext
    CODE:
    [file content]
    \`)

    - Store new files in MongoDB using /api/files.
    - Then immediately fetch the files from database and show the files to FileExplorer
    - Correctly classify and separate different file types:
      - Static: HTML, CSS, JS
      - React: JSX, JS (React components)
    - For React projects:
      - Ensure the presence of index.js as the entry point.
      - Ensure there is a App.css file for styling
      - Ensure index.html contains a root <div id="root"></div>.
      - Separate components correctly (e.g., App.js, Header.jsx).
      - Include a package.json file with necessary React dependencies.
      - Ensure all React files follow ES6+ syntax and React best practices.

    2. @updateFile - To update existing files:
    @updateFile(filename: "file.ext", content: "new content")

    - Maintain compatibility with React environment.
    - Ensure any updated files do not break existing imports.
  `}
            labels={{
              title: "Project Assistant",
              initial: "What would you like to create?",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
// import { CopilotChat, CopilotPopup } from "@copilotkit/react-ui";
// import "@copilotkit/react-ui/styles.css";
// import FileExplorer from "@/components/FileExploer";
// import LivePreview from "@/components/LivePreview";
// import io, { Socket } from "socket.io-client";
// import EditorPanel from "./_components/EditorPanel";
// import Header from "./_components/Header";

// interface File {
//   id: string;
//   name: string;
//   content: string;
// }

// function Page() {
//   const [files, setFiles] = useState<File[]>([]);
//   const [currentFile, setCurrentFile] = useState<File | null>(null);
//   const [code, setCode] = useState<string>("// Select or create a file");
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [fileContents, setFileContents] = useState<Record<string, string>>({});

//   // Initialize socket connection
//   useEffect(() => {
//     const socketInstance = io("http://localhost:3000", {
//       reconnection: true,
//       reconnectionAttempts: 5,
//       reconnectionDelay: 1000,
//     });

//     socketInstance.on("connect", () => {
//       console.log("Connected to Socket.IO server");
//     });

//     // Handle real-time file updates
//     socketInstance.on(
//       "file-update",
//       ({ fileId, content }: { fileId: string; content: string }) => {
//         setFileContents((prev) => ({
//           ...prev,
//           [fileId]: content,
//         }));

//         if (currentFile && currentFile.id === fileId) {
//           setCode(content);
//         }
//       }
//     );

//     socketInstance.on("new-file", (newFile: File) => {
//       setFiles((prev) => [...prev, newFile]);
//       setFileContents((prev) => ({
//         ...prev,
//         [newFile.id]: newFile.content,
//       }));
//     });

//     socketInstance.on("delete-file", (fileId: string) => {
//       setFiles((prev) => prev.filter((file) => file.id !== fileId));
//       setFileContents((prev) => {
//         const updated = { ...prev };
//         delete updated[fileId];
//         return updated;
//       });
//     });

//     setSocket(socketInstance);

//     return () => {
//       if (socketInstance) {
//         socketInstance.disconnect();
//       }
//     };
//   }, [currentFile]);

// useCopilotReadable({
// description: "Current state of the workspace",
// value: {
//     files: files.map((f) => f.name),
//     currentFile: currentFile?.name,
//     currentCode: code,
// },
// });

//   const fetchFiles = async () => {
//     try {
//       const response = await fetch("/api/files");
//       if (!response.ok) throw new Error("Failed to fetch files");
//       const data: File[] = await response.json();

//       // Store all file contents in state
//       const contents: Record<string, string> = {};
//       data.forEach((file) => {
//         contents[file.id] = file.content;
//       });

//       setFiles(data);
//       setFileContents(contents);
//     } catch (error) {
//       console.error("Error fetching files:", error);
//     }
//   };

//   useEffect(() => {
//     fetchFiles();
//   }, []);

//   const handleFileSelect = async (file: File) => {
//     setCurrentFile(file);

//     // Use cached content if available
//     if (fileContents[file.id]) {
//       setCode(fileContents[file.id]);
//     } else {
//       try {
//         const response = await fetch(`/api/files/${file.id}`);
//         if (!response.ok) throw new Error("Failed to fetch file content");
//         const data = await response.json();

//         setFileContents((prev) => ({
//           ...prev,
//           [file.id]: data.content,
//         }));
//         setCode(data.content);
//       } catch (error) {
//         console.error("Error fetching file content:", error);
//       }
//     }
//   };

//   const handleCodeChange = async (value: string | undefined) => {
//     if (!currentFile || !value) return;

//     // Update local state immediately
//     setCode(value);
//     setFileContents((prev) => ({
//       ...prev,
//       [currentFile.id]: value,
//     }));

//     try {
//       // Emit the change to other clients
//       if (socket) {
//         socket.emit("file-update", {
//           fileId: currentFile.id,
//           content: value,
//         });
//       }

//       // Save to backend
//       await fetch("/api/files", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id: currentFile.id, content: value }),
//       });
//     } catch (error) {
//       console.error("Error updating file:", error);
//     }
//   };

//   const processFiles = async ({ response }: { response: string }) => {
//     try {
//       const filePattern =
//         /FILE:\s*([\w.\-\/]+)\s*\nCODE:\s*([\s\S]*?)(?=\nFILE:|$)/g;
//       let match;
//       const newFiles: File[] = [];

//       while ((match = filePattern.exec(response)) !== null) {
//         const fileName = match[1].trim();
//         const fileContent = match[2].trim();

//         if (fileName && fileContent) {
//           const res = await fetch("/api/files", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name: fileName, content: fileContent }),
//           });

//           if (res.ok) {
//             const savedFile: File = await res.json();
//             newFiles.push(savedFile);

//             // Update local state
//             setFileContents((prev) => ({
//               ...prev,
//               [savedFile.id]: savedFile.content,
//             }));

//             // Emit new file to other clients
//             if (socket) {
//               socket.emit("new-file", savedFile);
//             }
//           }
//         }
//       }

//       setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//       return `Files saved successfully: ${newFiles
//         .map((f) => f.name)
//         .join(", ")}`;
//     } catch (error) {
//       console.error("Error processing files:", error);
//       return "Failed to save files.";
//     }
//   };

//   useCopilotAction({
//     name: "processFiles",
//     description: "Processes AI-generated files and saves them to Prisma",
//     parameters: [{ name: "response", type: "string", required: true }],
//     handler: processFiles,
//   });

//   return (

//     <div className="h-full">
//       <div className="max-w-[1800px]  mx-auto p-4">

//         <div className="flex flex-row w-full gap-1">
//         <div>
//           <FileExplorer
//             files={files}
//             onFileSelect={handleFileSelect}
//             currentFile={currentFile}
//           />
//         </div>
//         <div>
//         <EditorPanel
//           selectedFile={currentFile}
//           code={code}
//           onChange={handleCodeChange}
//         />
//         </div>

//           <LivePreview
//         files={files}
//         currentFile={currentFile}
//         code={code}
//         onCodeChange={handleCodeChange}
//       />
//       <CopilotPopup
//         instructions={`
//     You are an AI-powered code generator. Use the following actions:

//     1. @processFiles - To create new files, use this format:
//     @processFiles(response: \`
//     FILE: filename.ext
//     CODE:
//     [file content]
//     \`)

//     - Store new files in MongoDB using /api/files.
//     - Then immediately fetch the files from database and show the files to FileExplorer
//     - Correctly classify and separate different file types:
//       - Static: HTML, CSS, JS
//       - React: JSX, JS (React components)
//     - For React projects:
//       - Ensure the presence of index.js as the entry point.
//       - Ensure there is a App.css file for styling
//       - Ensure index.html contains a root <div id="root"></div>.
//       - Separate components correctly (e.g., App.js, Header.jsx).
//       - Include a package.json file with necessary React dependencies.
//       - Ensure all React files follow ES6+ syntax and React best practices.

//     2. @updateFile - To update existing files:
//     @updateFile(filename: "file.ext", content: "new content")

//     - Maintain compatibility with React environment.
//     - Ensure any updated files do not break existing imports.
//   `}
//         labels={{
//           title: "Project Assistant",
//           initial: "What would you like to create?",
//         }}
//       />
//         </div>
//       </div>
//     </div>

//   );
// }

// export default Page;
