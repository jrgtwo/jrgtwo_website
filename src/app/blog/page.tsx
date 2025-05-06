
import BlogPage from '@/components/blog/page/BlogPage'


export default async function Page({ params }: { params: Promise<{ page: string }> }) {

  return (<BlogPage params={params} />)

}
