import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  //output: 'export', // Outputs a Single-Page Application (SPA)
  //distDir: 'build', // Changes the build output directory to `build`,
  images: {
    remotePatterns: [
      new URL('https://placehold.co/**'),
      new URL('https://nvqrxmwjwwludwohgocs.supabase.co/storage/v1/object/public/**')
    ]
  }
}

export default nextConfig
