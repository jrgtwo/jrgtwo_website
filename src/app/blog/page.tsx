
import { Separator } from "@/components/ui/separator"
import BlogSidebar from "@/components/blog/sidebar/BlogSidebar"
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_DB_URL
const supabaseKey = process.env.NEXT_PUBLIC_DB_KEY
const supabase = (supabaseKey && supabaseUrl) && createClient(supabaseUrl, supabaseKey)

export default async function Page() {
  if (!supabase) return

  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .range(2, 3)

  return (
    <>
      <BlogSidebar />

      <h2> Welcom to my BLog!</h2 >
      <Separator className="my-4" />
      {JSON.stringify(data)}
      {JSON.stringify(error)}
    </>
  )
}
