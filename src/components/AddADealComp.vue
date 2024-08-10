<template>
  <main id="a-deal-comp">
    <img src="/src/assets/logo-1.png" alt="site logo" />
    <h1>Add a deal to your collection!</h1>
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
        <label for="dealCategory">Type of Food: </label>
        <select v-model="dealCategory">
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
          <input type="checkbox" id="monday" value="monday" v-model="availability" />
          <label for="monday">Mon</label>
        </div>
        <div>
          <input type="checkbox" id="tuesday" value="tuesday" v-model="availability" />
          <label for="tuesday">Tue</label>
        </div>
        <div>
          <input type="checkbox" id="wednesday" value="wednesday" v-model="availability" />
          <label for="wednesday">Wed</label>
        </div>
        <div>
          <input type="checkbox" id="thursday" value="thursday" v-model="availability" />
          <label for="thursday">Thu</label>
        </div>
        <div>
          <input type="checkbox" id="friday" value="friday" v-model="availability" />
          <label for="friday">Fri</label>
        </div>
        <div>
          <input type="checkbox" id="Saturday" value="Saturday" v-model="availability" />
          <label for="Saturday">Sat</label>
        </div>
        <div>
          <input type="checkbox" id="Sunday" value="sunday" v-model="availability" />
          <label for="sunday">Sun</label>
        </div>
      </div>
      <div>
        <label for="startTime">Start Time: </label>
        <input type="time" id="startTime" v-model="startTime" required />
      </div>
      <div>
        <label for="endTime">End Time: </label>
        <input type="time" id="endTime" v-model="endTime" required />
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
// import supabase from '@/service/SupabaseService'

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
      isPublic: false
    }
  },
  methods: {
    handleAllDayChange() {
      if (this.allDay) {
        this.startTime = ''
        this.endTime = ''
      }
    },
    async handleAddDeal() {
      // const { data, error } = await supabase
      // .from('app_user')
      // .insert([])
      // .select()

      console.log(
        this.placeName,
        this.address,
        this.dealCategory,
        this.description,
        this.availability,
        this.startTime,
        this.endTime,
        this.allDay,
        this.isPublic
      )
    }
  }
}
</script>
<style scoped>
#a-deal-comp {
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

img {
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
</style>
