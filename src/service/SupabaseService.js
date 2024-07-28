import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vdwglvyzluvcujitmxum.supabase.co'
const supabaseKey = import.meta.env.VUE_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
