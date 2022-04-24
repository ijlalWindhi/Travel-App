import React from 'react'

function Card() {

    return (
        <> 
            <div className='flex flex-row'>
                <div className='bg-primary-purple text-white text-center w-2/4 py-12 rounded-lg'>
                  <h1 className='font-bold text-6xl'>10</h1>
                  <h3 className='font-medium text-2xl'>Years Experience</h3>
                </div>
                <div className='bg-primary-purple text-white text-center w-2/4 py-12 rounded-lg mx-14'>
                  <h1 className='font-bold text-6xl'>200+</h1>
                  <h3 className='font-medium text-2xl'>Destination Colaboration</h3>
                </div>
                <div className='bg-primary-purple text-white text-center w-2/4 py-12 rounded-lg'>
                  <h1 className='font-bold text-6xl'>31K+</h1>
                  <h3 className='font-medium text-2xl'>Customers Happy</h3>
                </div>
            </div>
        </>
    )
}

export default Card