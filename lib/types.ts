import type * as monaco from "monaco-editor";

export interface Theme {
  id: string;
  label: string;
  color: string;
}

export interface Language {
  id: string;
  label: string;
  logoPath: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
}

export interface LanguageRuntime {
  language: string;
  version: string;
}

export interface ExecuteCodeResponse {
  compile?: {
    output: string;
  };
  run?: {
    output: string;
    stderr: string;
  };
}

export interface ExecutionResult {
  code: string;
  output: string;
  error: string | null;
}

// export interface CodeEditorState {
//   language: string;
//   output: string;
//   isRunning: boolean;
//   error: string | null;
//   theme: string;
//   fontSize: number;
//   editor: Monaco | null;
//   executionResult: ExecutionResult | null;

//   setEditor: (editor: Monaco) => void;
//   getCode: () => string;
//   setLanguage: (language: string) => void;
//   setTheme: (theme: string) => void;
//   setFontSize: (fontSize: number) => void;
//   runCode: () => Promise<void>;
// }

export interface Snippet {
  id: string;
  userId: string;
  language: string;
  code: string;
  title: string;
  userName: string;
}




export interface CodeEditorState {
  language: string;
  fontSize: number;
  theme: string;
  output: string;
  isRunning: boolean;
  error: string | null;
  executionResult: { code: string; output: string; error: string | null } | null;
  editor: monaco.editor.IStandaloneCodeEditor | null;

  getCode: () => string;
  setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  setLanguage: (language: string) => void;
  runCode: () => Promise<void>;
}
