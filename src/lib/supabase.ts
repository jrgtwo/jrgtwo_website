import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_DB_URL
const supabaseKey = process.env.NEXT_PUBLIC_DB_KEY
const supabaseClient = (supabaseKey && supabaseUrl) && createClient(supabaseUrl, supabaseKey)

export { supabaseClient }