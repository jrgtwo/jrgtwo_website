import { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/db/database.types'

export type TypedSupabaseClient = SupabaseClient<Database>