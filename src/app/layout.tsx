import type { Metadata } from 'next'
import { MainHeader } from '@/components/mainHeader/MainHeader'
import { MainFooter } from '@/components/mainFooter/MainFooter'
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
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />
      </head>

      <body>
        <div id="root">
          <MainHeader />
          <section className="w-11/12 max-w-[950px] lg:w-9/12 m-auto">
            {children}
          </section>
          <MainFooter />
        </div>

      </body>

    </html>
  )
}