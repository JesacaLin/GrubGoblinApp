import supabase from '../service/SupabaseService'
import store from '../store/index'

export default {
  async getRecentDeals() {
    const user = store.state.user

    const { data, error } = await supabase
      .from('deal')
      .select('*')
      .eq('created_by', user.id)
      .order('created_at', { ascending: false })
      .limit(4)
    if (error) throw error
    return data
  }
}
