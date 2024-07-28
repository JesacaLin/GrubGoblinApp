import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vdwglvyzluvcujitmxum.supabase.co'
const supabaseKey = import.meta.env.VUE_APP_SUPABASE_KEY // Use import.meta.env for environment variable
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
