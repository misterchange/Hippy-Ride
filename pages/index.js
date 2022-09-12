import Confirm from "../components/Confirm"
import LocationSelector from "../components/LocationSelector"
import Map from "../components/Map"
import Navbar from "../components/Navbar"

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10 overflow-hidden`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[330px] ml-[1rem] py-[1rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[500px] bg-white rounded-lg flex flex-col overflow-auto scrollbar-hide`,
}

export default function Home() {
  return (
  <div className={style.wrapper} >
    <Navbar/>
  <div className={style.main}>
    <Map/>
  </div>
  <div className={style.rideRequestContainer}>
    <div className={style.rideRequest}>
   <LocationSelector />
   <Confirm/>
    </div>
  </div>
  </div>
  )
}
