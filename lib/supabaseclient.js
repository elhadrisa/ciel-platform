import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "TON_URL"
const supabaseKey = "TA_CLE"

export const supabase = createClient(supabaseUrl, supabaseKey)