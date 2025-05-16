// import { Sandpack } from "@codesandbox/sandpack-react";
'use client'
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { nightOwl } from '@codesandbox/sandpack-themes';
import IdeCodeDisplay from "@/components/blog/post/IdeCodeDisplay";

export default function Playground({ data = {} }) {

  return (

    <IdeCodeDisplay>
      <SandpackProvider
        template={'static'}
        theme={nightOwl}
        options={{
          autorun: false,
        }}

        files={{
          '/index.js': {
            code: data?.code,
            active: true,
            hidden: false,
            //  readOnly: true,
          },
          '/index.html': {
            code: '<script src="/index.js"></script>',
            active: false,
            hidden: true,
          },
        }}
      >
        <div style={{}}>
          <SandpackCodeEditor />
          {/* <SandpackPreview /> */}
          <SandpackConsole standalone={true} />
        </div>
      </SandpackProvider>
    </IdeCodeDisplay >
  )
}