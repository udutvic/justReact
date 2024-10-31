"use client";

import React from "react";
// import Header from "../app/components/Header";
import Sidebar from "../app/components/Sidebar";
// import CodeEditor from "../app/components/CodeEditor";
import CodeSandbox from "../app/components/CodeSandbox";

export default function App() {
  return (
    <div className="grid grid-cols-[19rem,_1fr] bg-[#183243] text-white">
      <Sidebar />
      <main>
      {/* <Header /> */}
        {/* <CodeEditor /> */}
        <CodeSandbox />
      </main>
    </div>
  );
}
