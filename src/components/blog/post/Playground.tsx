'use client'
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import type { SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
import { nightOwl } from '@codesandbox/sandpack-themes';
import IdeCodeDisplay from "@/components/blog/post/IdeCodeDisplay";

type PlaygroundProps = {
  template: SandpackPredefinedTemplate;
  viewOnly: boolean;
  showPreview: boolean;
  showConsole: boolean;
  data?: {
    code?: string;
  };
};

export default function Playground({
  template = "static",
  viewOnly = false,
  showConsole = false,
  showPreview = false,
  data = {} }: PlaygroundProps) {

  return (
    <IdeCodeDisplay>
      <SandpackProvider
        template={template}
        theme={nightOwl}
        options={{
          autorun: false,
        }}
        files={{
          '/index.js': {
            code: data?.code || '',
            active: true,
            hidden: false,
          },
          '/index.html': {
            code: '<script src="/index.js"></script>',
            active: false,
            hidden: true,
          },
        }}
      >
        <div>
          <div className={`editor-wrapper ${(viewOnly || (!showConsole && !showPreview  )) ? 'view-only' : ''}`}>
            <SandpackCodeEditor showLineNumbers={true} />
          </div>
          <div>
            {showPreview && (
              <SandpackPreview />
            )}
            {showConsole && (
              <>
                <h3 className="p-2 font-bold text-l">Console:</h3>
                <SandpackConsole standalone={!showPreview} className="min-h-20 max-h-20" />
              </>
            )}
          </div>
        </div>
      </SandpackProvider>
    </IdeCodeDisplay >
  )
}