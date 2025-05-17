'use client'
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import { nightOwl } from '@codesandbox/sandpack-themes';
import IdeCodeDisplay from "@/components/blog/post/IdeCodeDisplay";

export default function Playground({ data = {} }: { data?: { code?: string } }) {

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
            code: data?.code || '',
            active: true,
            hidden: false,
            readOnly: true,
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
          <div>
            <h3 className="p-2 font-bold text-l">Console:</h3>
            <SandpackConsole standalone={true} className="min-h-16" />
          </div>
        </div>
      </SandpackProvider>
    </IdeCodeDisplay >
  )
}