
import { createClient } from '@supabase/supabase-js'
const runtimeConfig = useRuntimeConfig()
const supabaseUrl = runtimeConfig.public.apiBase
const supabaseKey = runtimeConfig.apiSecret
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;