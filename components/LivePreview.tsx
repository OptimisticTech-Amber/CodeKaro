"use client";

import React, { useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";

interface FileAccumulator {
  [key: string]: { code: string };
}

interface File {
  name: string;
  content: string;
}

interface LivePreviewProps {
  files: File[];
  currentFile: File | null;
  code: string;
  onCodeChange?: (value: string | undefined) => void;
}
interface SandpackFile {
  code: string;
}

interface SandpackFiles {
  [key: string]: SandpackFile;
}

const LivePreview: React.FC<LivePreviewProps> = ({
  files,
  currentFile,
  code,
}) => {
  const [sandboxFiles, setSandboxFiles] = useState<
    Record<string, { code: string }>
  >({});
  const [template, setTemplate] = useState<"vanilla" | "react">("vanilla"); // Default to static
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!currentFile || !files) return;

    const newFiles: SandpackFiles = files.reduce(
      (acc: FileAccumulator, file) => {
        acc[`/${file.name}`] = { code: file.content };
        return acc;
      },
      {}
    );

    // Check if the project is React-based
    const isReactProject = files.some(
      (file) =>
        file.name.endsWith(".jsx") ||
        (file.name.endsWith(".js") && file.content.includes("React"))
    );

    if (isReactProject) {
      setTemplate("react");

      // Ensure App.js exists
      if (!newFiles["/App.js"]) {
        newFiles["/App.js"] = {
          code: `
            import React from "react";
            function App() { return <h1>Hello, React!</h1>; }
            export default App;
          `,
        };
      }

      // Ensure index.js exists
      newFiles["/index.js"] = {
        code: `
          import React from "react";
          import ReactDOM from "react-dom/client";
          import App from "./App";

          const root = document.getElementById("root");
          if (root) {
            ReactDOM.createRoot(root).render(<App />);
          } else {
            console.error("Root element not found!");
          }
        `,
      };

      // Ensure index.html exists
      newFiles["/index.html"] = {
        code: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
          </head>
          <body>
            <div id="root"></div>
          </body>
          </html>
        `,
      };

      // Ensure package.json exists
      newFiles["/package.json"] = {
        code: JSON.stringify(
          {
            main: "/index.js",
            dependencies: {
              react: "18.2.0",
              "react-dom": "18.2.0",
            },
          },
          null,
          2
        ),
      };
    } else {
      setTemplate("vanilla");

      const htmlFile = files.find((f) => f.name.endsWith(".html"));
      if (htmlFile) {
        let htmlContent = htmlFile.content;

        // Inject CSS files
        files
          .filter((f) => f.name.endsWith(".css"))
          .forEach((cssFile) => {
            htmlContent = htmlContent.replace(
              "</head>",
              `<link rel="stylesheet" href="${cssFile.name}"></head>`
            );
          });

        // Inject JS files
        files
          .filter((f) => f.name.endsWith(".js"))
          .forEach((jsFile) => {
            htmlContent = htmlContent.replace(
              "</body>",
              `<script src="${jsFile.name}"></script></body>`
            );
          });

        newFiles["/index.html"] = { code: htmlContent };
      }
    }

    // Ensure the current file is included
    newFiles[`/${currentFile.name}`] = { code };
    setSandboxFiles(newFiles);
    setLoading(false);
  }, [files, currentFile, code]);

  return (
    <div className="flex-1">
      {loading ? (
        <div className="h-full flex items-center justify-center ">
          Loading...
        </div>
      ) : currentFile ? (
        <SandpackProvider
          template={template}
          files={sandboxFiles}
          options={{ activeFile: `/${currentFile.name}` }}
        >
          <SandpackThemeProvider>
            <SandpackLayout>
              <SandpackPreview style={{ height: "700px", border: "none" }} />
            </SandpackLayout>
          </SandpackThemeProvider>
        </SandpackProvider>
      ) : (
        <div className="h-full flex items-center justify-center text-gray-500">
          Select a file to preview
        </div>
      )}
    </div>
  );
};

export default LivePreview;
