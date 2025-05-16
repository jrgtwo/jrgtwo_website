import { MDXRemote } from 'next-mdx-remote-client/rsc'

export default async function RemoteMdxPage() {
  // MDX text - can be from a database, CMS, fetch, anywhere...
  // const res = await fetch('https://...')
  // const markdown = await res.text()
  return (
    <>
      <textarea placeholder='Add Post Here'></textarea>
      <MDXRemote source={'# hello'} />
    </>
  )
}