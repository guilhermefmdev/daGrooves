import { SlOptionsVertical } from 'react-icons/sl'
import { IoIosArrowBack } from 'react-icons/io'
import './Tab.css'
const Tab = () => {
    return (
        <>
            <div className="tab">
                <button className='tab-return'><IoIosArrowBack /></button>
                <div className='tab-info'>
                    <h3>Playing from Album</h3>
                    <h2>Spiritual State</h2>
                </div>
                <button className='tab-options'><SlOptionsVertical /></button>

            </div>

        </>

    )
}
export default Tab