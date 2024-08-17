<template>
  <main id="map-container">
    <div id="map"></div>
  </main>
</template>

<script>
import { loadGoogleMapsScript } from '../service/GoogleApiService'

export default {
  name: 'MapsComp',

  props: {
    address: {
      type: String,
      required: true
    }
  },

  mounted() {
    loadGoogleMapsScript(async () => {
      if (typeof google !== 'undefined') {
        const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary('marker')
        this.AdvancedMarkerElement = AdvancedMarkerElement
        this.geocodeAddress(this.address)
      } else {
        console.error('Google Maps script not loaded')
      }
    })
  },
  methods: {
    geocodeAddress(address) {
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          this.initMap(results[0].geometry.location)
        } else {
          console.error('Geocode was not successful for the following reason: ' + status)
        }
      })
    },
    initMap(location) {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 14,
        mapId: 'e035ced1e7d30e4d'
      })

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: location,
        map: this.map,
        title: 'Destination'
      })
    }
  }
}
</script>
<style scoped>
#map-container {
  height: 100%;
  width: 100%;
  border-radius: 30px;

  padding: 2rem;
}

#map {
  height: 500px;
  width: 100%;
  border-radius: 30px;
}
</style>
