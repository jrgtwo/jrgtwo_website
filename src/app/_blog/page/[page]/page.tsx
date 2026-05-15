'use client'
import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { useParams } from 'next/navigation'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import BlogList from '@/components/blog/page/BlogList'
import BlogListPagination from '@/components/blog/page/BlogListPagination'
import { getPageById } from '@/queries/blog/page/getPageById'
import { getCount } from '@/queries/blog/page/getCount'

export default function BlogPage() {
  const { page } = useParams<{ page: string }>()
  const normalizedPage = page
    ? parseInt(page, 10)
    : 1
  const supabase = useSupabaseBrowser()
  const { data } = useQuery(getPageById(supabase, normalizedPage))
  const { count } = useQuery(getCount(supabase))
  return (
    <div className="w-full md:w-[48em] m-auto">
      <BlogList data={data} />
      <BlogListPagination
        count={count}
        normalizedPage={normalizedPage} />
    </div>
  )
}
