import React from 'react'
import Plane from "../../../assets/image-plane.png"
import Travel from "../../../assets/image-travel.png"
import Bus from "../../../assets/image-bus.png"

function Card() {

    return (
        <> 
            <div className='flex flex-row justify-around'>
                <div className='text-center'>
                    <div className='bg-white rounded-2xl drop-shadow-lg height'>
                        <img src={Plane} alt="Image Cover" className='rounded-t-2xl'/>
                        <h3 className='font-medium text-4xl mt-5 pb-5'>Plane</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='bg-white rounded-2xl drop-shadow-lg height'>
                        <img src={Travel} alt="Image Cover" className='rounded-t-2xl'/>
                        <h3 className='font-medium text-4xl mt-5 pb-5'>Travel</h3>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='bg-white rounded-2xl drop-shadow-lg height'>
                        <img src={Bus} alt="Image Cover" className='rounded-t-2xl'/>
                        <h3 className='font-medium text-4xl mt-5 pb-5'>Bus</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card