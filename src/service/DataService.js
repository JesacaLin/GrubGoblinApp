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

export async function fetchDealById(dealId) {
  const { data, error } = await supabase
    .from('deal')
    .select(
      `
    *,
    place (
      place_name,
      address,
      latitude,
      longitude
    ),
    review (
      stars,
      review_description,
      reviewed_by
    )
  `
    )
    .eq('deal_id', dealId)

  if (error) throw error
  if (data.length == 0) throw 'not found'
  return data[0]

  // const deal = data[0]
  // deal.review = deal.review.filter((review) => review.reviewed_by === user.userEmail)

  // if (deal.review.length === 1) {
  //   deal.review = deal.review[0]
  // }

  // return deal
}

export async function getPublicDeals() {
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
    .eq('is_public', true)
    .neq('created_by', user.userEmail)
    .order('created_at', { ascending: false })
    .limit(4)
  if (error) throw error
  return data
}
