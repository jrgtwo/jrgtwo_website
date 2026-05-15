'use client'
import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import BlogList from '@/components/blog/page/BlogList'
import BlogListPagination from '@/components/blog/page/BlogListPagination'
import { getPageById } from '@/queries/blog/page/getPageById'
import { getCount } from '@/queries/blog/page/getCount'

export default function BlogPage() {

  const supabase = useSupabaseBrowser()
  const { data } = useQuery(getPageById(supabase, 1))
  const { count } = useQuery(getCount(supabase))
  return (
    <div className="w-full md:w-[48em] m-auto">
      <BlogList data={data} />
      <BlogListPagination
        count={count}
        normalizedPage={1} />
    </div>
  )
}