const googleApiKey = import.meta.env.VITE_VUE_APP_GOOGLE_API

export const loadGoogleMapsScript = (callback) => {
  const existingScript = document.getElementById('googleMaps')

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`
    script.id = 'googleMaps'
    document.body.appendChild(script)

    script.onload = () => {
      if (callback) callback()
    }
  } else if (callback) {
    callback()
  }
}

export const getDirections = async (origin, destination) => {
  const response = await fetch(
    `https://routes.googleapis.com/directions/v2:computeRoutes?key=${googleApiKey}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: {
          location: {
            latLng: origin
          }
        },
        destination: {
          location: {
            latLng: destination
          }
        },
        travelMode: 'DRIVE'
      })
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch directions')
  }

  return response.json()
}
