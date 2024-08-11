<template>
  <main>
    <img src="/src/assets/logo-1.png" alt="site logo" class="logo-in-modal" />
    <h1 v-if="dealAdded">
      Deal added! 🥳 <br />
      Do you want to add another one?
    </h1>
    <h1 v-else>Add a deal to your collection! 🤤</h1>
    <button class="close-button" @click="$emit('close')">X</button>
    <form @submit.prevent="handleAddDeal">
      <div>
        <label for="placeName">Place Name: </label>
        <input type="text" id="placeName" name="placeName" v-model="placeName" required />
      </div>
      <div>
        <label for="address">Address: </label>
        <input type="text" id="address" name="address" v-model="address" required />
      </div>
      <div>
        <label for="dealCategory">Type of Deal: </label>
        <select v-model="dealCategory">
          <option value="blank">-----</option>
          <option value="food">Food</option>
          <option value="drinks">Drinks</option>
          <option value="groceries">Groceries</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label for="description">Deal Description: </label>
        <input type="text" id="description" name="description" v-model="description" required />
      </div>
      <div class="availability">
        <label>Availability:</label>
        <div>
          <input type="checkbox" id="monday" value="Monday" v-model="availability" />
          <label for="monday">Mon</label>
        </div>
        <div>
          <input type="checkbox" id="tuesday" value="Tuesday" v-model="availability" />
          <label for="tuesday">Tue</label>
        </div>
        <div>
          <input type="checkbox" id="wednesday" value="Wednesday" v-model="availability" />
          <label for="wednesday">Wed</label>
        </div>
        <div>
          <input type="checkbox" id="thursday" value="Thursday" v-model="availability" />
          <label for="thursday">Thu</label>
        </div>
        <div>
          <input type="checkbox" id="friday" value="Friday" v-model="availability" />
          <label for="friday">Fri</label>
        </div>
        <div>
          <input type="checkbox" id="Saturday" value="Saturday" v-model="availability" />
          <label for="Saturday">Sat</label>
        </div>
        <div>
          <input type="checkbox" id="Sunday" value="Sunday" v-model="availability" />
          <label for="sunday">Sun</label>
        </div>
      </div>
      <div>
        <label for="startTime">Start Time: (11:00 AM)</label>
        <input type="time" id="startTime" v-model="startTime" />
      </div>
      <div>
        <label for="endTime">End Time: (5:00 PM)</label>
        <input type="time" id="endTime" v-model="endTime" />
      </div>
      <div class="flex-checkbox">
        <label for="allDay">Is the deal available all day?</label>
        <input type="checkbox" id="allDay" v-model="allDay" @change="handleAllDayChange" />
      </div>
      <div class="flex-checkbox">
        <label for="isPublic">Add the deal to community database?</label>
        <input type="checkbox" id="isPublic" v-model="isPublic" />
      </div>
      <div>
        <button class="submit-button" type="submit">Submit</button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import supabase from '@/service/SupabaseService'

export default {
  name: 'AddADealComp',

  data() {
    return {
      placeName: '',
      address: '',
      dealCategory: '',
      description: '',
      availability: [],
      startTime: '',
      endTime: '',
      allDay: false,
      isPublic: false,
      dealAdded: false
    }
  },

  computed: {
    ...mapGetters({
      userEmail: 'getUserEmail'
    })
  },

  methods: {
    handleAllDayChange() {
      if (this.allDay) {
        this.startTime = null
        this.endTime = null
      }
    },

    //TODO -> need to manually add (lat, long, google rating) for now until googl api is hooked up
    async handleAddDeal() {
      try {
        const { data: placeData, error: placeError } = await supabase
          .from('place')
          .insert([
            {
              place_name: this.placeName,
              address: this.address,
              latitude: null,
              longitude: null,
              google_rating: null
            }
          ])
          .select()

        if (placeError) {
          throw placeError
        }

        const placeId = placeData[0].place_id

        console.log(`Place added: ${placeData}, id: ${placeId}`)

        const endTime = this.endTime === '' ? null : this.endTime

        const { data: dealData, error: dealError } = await supabase
          .from('deal')
          .insert([
            {
              place_id: placeId,
              type_of_deal: this.dealCategory,
              deal_description: this.description,
              days_of_week: this.availability,
              start_time: this.startTime,
              end_time: endTime,
              is_all_day: this.allDay,
              created_by: this.userEmail,
              is_public: this.isPublic
            }
          ])
          .select()

        if (dealError) {
          throw dealError
        }

        console.log(`Deal added: ${dealData}`)
        this.clearForm()
        this.dealAdded = true

        //  TODO forcing a reload does not seem to Work...
        this.$router.replace({ name: 'HomeView' })
      } catch (error) {
        console.error('Ughhh error inserting data:', error)
      }
    },

    clearForm() {
      this.placeName = ''
      this.address = ''
      this.dealCategory = ''
      this.description = ''
      this.availability = ''
      this.startTime = ''
      this.endTime = ''
      this.allDay = false
      this.isPublic = false
    }
  }
}
</script>
<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 1rem;
}

div {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.logo-in-modal {
  width: 15%;
  padding: 10px;
}

.availability {
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
}

.flex-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;
}

h1 {
  text-align: center;
}
</style>
