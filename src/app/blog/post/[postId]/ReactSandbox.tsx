// import { Sandpack } from "@codesandbox/sandpack-react";
'use client'
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from '@codesandbox/sandpack-themes';
import IdeCodeDispay from "@/components/blog/post/IdeCodeDisplay";

export default function Playground({ files, preset = "static" }) {
  debugger
  return (

    <IdeCodeDispay>
      <SandpackProvider
        template={'static'}
        theme={nightOwl} files={files}
        options={{
          layout: "console", // preview | tests | console

          showConsole: true,
        }}
      >
        <div style={{}}>
          <SandpackCodeEditor />
          {/* <SandpackPreview /> */}
          <SandpackConsole standalone={true} />
        </div>
      </SandpackProvider>
    </IdeCodeDispay>
  )
}