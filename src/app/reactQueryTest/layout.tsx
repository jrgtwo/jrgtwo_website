import { ReactQueryClientProvider } from '@/components/providers/ReactQueryClientProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <div>{children}</div>
    </ReactQueryClientProvider>
  )
}