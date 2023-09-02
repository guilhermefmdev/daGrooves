import Tab from './components/Tab/Tab'
import './App.css'
import Vinyl from './components/Vinyl/Vinyl'
import TrackInfo from './components/TrackInfo/TrackInfo'
import AirAnimation from './components/AirAnimation/AirAnimation'
import TrackControllers from './components/TrackControllers/TrackControllers'
import Header from './components/Header/Header'
function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Tab />
        <Vinyl />
        <TrackInfo />
        <TrackControllers />
        <AirAnimation />
      </div>
    </>
  )
}

export default App
