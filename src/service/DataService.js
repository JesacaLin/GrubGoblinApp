import supabase from '../service/SupabaseService'
import store from '../store/index'

export async function getRecentDeals() {
  const user = store.state

  const { data, error } = await supabase
    .from('deal')
    .select(
      `
    *,
    place (
      place_name
    )
  `
    )
    .eq('created_by', user.userEmail)
    .order('created_at', { ascending: false })
    .limit(4)
  if (error) throw error
  return data
}

export async function getPublicDeals() {
  const { data, error } = await supabase
    .from('deal')
    .select(
      `
    *,
    place (
      place_name
    )
  `
    )
    .eq('is_public', true)
    .order('created_at', { ascending: false })
    .limit(4)
  if (error) throw error
  return data
}
