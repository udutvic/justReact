// app/components/CodeSandbox.js
"use client";

import React from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";

// import "../styles/sandpack.css"; // Використовуємо свій файл стилів

const CodeSandbox = () => {
  return (
    <SandpackProvider
      template="react"
      files={{
        "/App.js": {
          code: `import React from "react";
export default function App() { return <div>Hello World!</div>; }, }, "/index.js": { code: import React from "react"; import { createRoot } from "react-dom/client"; import App from "./App";

const container = document.getElementById("root"); const root = createRoot(container); root.render(<App />); `, }, }} > <SandpackLayout> <SandpackCodeEditor /> <SandpackPreview /> <SandpackConsole /> </SandpackLayout> </SandpackProvider> ); };

export default CodeSandbox;