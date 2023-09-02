import { useState, useEffect } from 'react'
import {
    TbPlayerSkipBackFilled,
    TbPlayerPlayFilled,
    TbPlayerSkipForwardFilled,
    TbPlayerPause
} from 'react-icons/tb'
import './TrackControllers.css'

const UseTrack = url => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)
    audio.type = "audio/mp3"
    const toggle = () => setPlaying(!playing)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    },
    [playing]
    )

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false))
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    },[])
    return [playing, toggle]
}

const TrackControllers = () => {
    const url = '../../spiritual-state.mp3'
    const [playing, toggle] = UseTrack(url)
    return (
        <div className="controllers">
            {/* <audio className='track'>
                    <source src="src\assets\Spiritual State (320 kbps).mp3" type="audio/mpeg" />
                </audio> */}
            <input type="range" className="progress" defaultValue='0' min='0' max='100' />
            <div className='buttons'>
                <button className="back-btn controls-btns">
                    <TbPlayerSkipBackFilled />
                </button>
                <button className="play-pause-btn controls-btns" onClick={toggle} >
                    {playing ? <TbPlayerPause /> : <TbPlayerPlayFilled />}
                </button>
                <button className="foward-btn controls-btns">
                    <TbPlayerSkipForwardFilled />
                </button>
            </div>
        </div>
    )
}
export default TrackControllers