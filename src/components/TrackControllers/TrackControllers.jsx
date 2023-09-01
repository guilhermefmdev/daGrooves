import { TbPlayerSkipBackFilled } from 'react-icons/tb'
import { TbPlayerPlayFilled } from 'react-icons/tb'
import { TbPlayerSkipForwardFilled } from 'react-icons/tb'
import { useState } from 'react'
import './TrackControllers.css'
const TrackControllers = () => {
    const [playPause, setPlayPause] = useState([false])

    return (
            <div className="controllers">
                <audio className='track'>
                    <source src="src\assets\Spiritual State (320 kbps).mp3" type="audio/mpeg" />
                </audio>
                <input type="range" className="progress" min='0' />
                <div className='buttons'>
                    <button className="back-btn controls-btns">
                        <TbPlayerSkipBackFilled />
                    </button>
                    <button className="play-btn controls-btns">
                        <TbPlayerPlayFilled />
                    </button>
                    <button className="foward-btn controls-btns">
                        <TbPlayerSkipForwardFilled />
                    </button>
                </div>
            </div>
    )
}
export default TrackControllers