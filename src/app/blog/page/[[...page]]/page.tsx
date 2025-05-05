import { BlogPage } from "@/components/blog/page/BlogPage";

export default async function BlogListPage({ params }: { params: Promise<{ page: string }> }) {
  return (<BlogPage params={params} />)
}