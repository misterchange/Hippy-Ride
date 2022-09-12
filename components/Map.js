// import React, { useEffect,useContext } from 'react'
// import mapboxgl from 'mapbox-gl'
// import { UberContext } from '../context/uberContext'

// const style = {
//     wrapper: `flex-1 h-full w-full`,
//   }

//   mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

// const Map = () => {
//   const { pickupCoordinates, dropoffCoordinates }= useContext(UberContext)
//     useEffect(() => {
//         const map = new mapboxgl.Map({
//           container: 'map',
//           style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
//           center: [72.877426,19.076090],
//           zoom: 4,
//         })
    

//     if (pickupCoordinates) {
//       addToMap(map, pickupCoordinates)
//     }

//     if (dropoffCoordinates) {
//       addToMap(map, dropoffCoordinates)
//     }

//     if (pickupCoordinates && dropoffCoordinates) {
//       map.fitBounds([dropoffCoordinates, pickupCoordinates], {
//         padding: 150,
//       })
//     }
//   }, [pickupCoordinates, dropoffCoordinates])

//     const addToMap =(map, coordinates) =>{
//       const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
//     }

//   return <div className={style.wrapper} id='map'/>

// }

// export default Map




import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  console.log(pickupCoordinates,dropoffCoordinates)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [72.877426,19.076090],
      zoom: 3,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 150,
      })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    const marker2 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map
