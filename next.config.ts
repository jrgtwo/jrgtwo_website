import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  //output: 'export', // Outputs a Single-Page Application (SPA)
  //distDir: 'build', // Changes the build output directory to `build`,
  images: {
    remotePatterns: [
      new URL('https://placehold.co/**'),
      new URL('https://nvqrxmwjwwludwohgocs.supabase.co/storage/v1/object/public/**')
    ]
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig)
