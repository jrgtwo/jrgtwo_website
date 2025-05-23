'use client'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer
} from "@codesandbox/sandpack-react";
import type { SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
import { nightOwl } from '@codesandbox/sandpack-themes';
import IdeCodeDisplay from "@/components/blog/post/IdeCodeDisplay";

type ReactPlaygroundProps = {
  template: SandpackPredefinedTemplate;
  viewOnly: boolean;
  showPreview: boolean;
  showConsole: boolean;
  showFileExplorer: boolean;
  data?: {
    code?: string;
    files?: Record<string, string>;
  };
};

export default function ReactPlayground({
  template = "react",
  viewOnly = false,
  showConsole = false,
  showPreview = false,
  showFileExplorer = false,

  data = {} }: ReactPlaygroundProps) {

  const defaultFiles = {
    '/App.js': {
      code: data?.code || '',
      active: true,
    }
  }

  return (
    <IdeCodeDisplay>
      <SandpackProvider
        template={template}
        theme={nightOwl}
        customSetup={{
          dependencies: {
            "class-variance-authority": "latest"
          }
        }}
        options={{
          autorun: false,
          externalResources: ["https://cdn.tailwindcss.com"]
        }}
        files={data?.files || defaultFiles}
      >
        {showFileExplorer &&
          <SandpackFileExplorer autoHiddenFiles />
        }
        <SandpackLayout>
          <div>
            <div className={`editor-wrapper`}>
              <SandpackCodeEditor showRunButton={!(viewOnly || (!showConsole && !showPreview))} showLineNumbers={true} />
            </div>
            <div>
              {showPreview && (
                <SandpackPreview />
              )}
              {showConsole && (
                <>
                  <h3 className="p-2 font-bold text-l">Console:</h3>
                  <SandpackConsole standalone={!showPreview} className="min-h-20 max-h-40" />
                </>
              )}
            </div>
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </IdeCodeDisplay >
  )
}