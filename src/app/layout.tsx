import type { Metadata } from 'next'
import { MainHeader } from '@/components/mainHeader/MainHeader'
import { MainFooter } from '@/components/mainFooter/MainFooter'
import { ReactQueryClientProvider } from '@/components/providers/ReactQueryClientProvider'
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../index.css'

export const metadata: Metadata = {
  title: 'JonathanRayGarcia.com',
  description: 'This is my site :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />
      </head>

      <body>
        <div id="root">
          <ReactQueryClientProvider>
            <MainHeader />
            <section className="w-11/12 max-w-[950px] lg:w-9/12 m-auto">
              {children}
              <SpeedInsights />
            </section>
            <MainFooter />
          </ReactQueryClientProvider>
        </div>

      </body>

    </html>
  )
}