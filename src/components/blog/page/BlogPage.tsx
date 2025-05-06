import { supabaseClient as supabase } from "@/lib/supabase"
import { PAGE_OFFSET } from "@/app/blog/constants"
import BlogList from "@/components/blog/page/BlogList"
import BlogListPagination from "@/components/blog/page/BlogListPagination"

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  if (!supabase) return
  const { page: paramsPage } = await params;
  const normalizedPage = paramsPage
    ? parseInt(paramsPage, 10)
    : 1

  const rangeFrom = PAGE_OFFSET * (normalizedPage - 1)
  const rangeTo = rangeFrom + PAGE_OFFSET - 1
  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .order('created_at', { ascending: false })
    .range(rangeFrom, rangeTo)

  const { count, error: countError } = await supabase
    .from('Blog')
    .select('*', { count: 'exact', head: true })

  if (error || countError || !data || !count) {
    return (
      <div>
        <p>Error: {JSON.stringify(error)}</p>
      </div>
    )
  }

  return (
    <>
      <BlogList data={data} />
      <BlogListPagination
        count={count}
        normalizedPage={normalizedPage} />
    </>
  )
}