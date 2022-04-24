import React from 'react'

function Footer() {
  return (
    <>
        <div className='bg-primary-purple'>
            <div className='flex flex-row justify-around pt-8'>
                <div className='text-4xl font-semibold'>
                    <h3>Skuy<span className='text-white'>Travel</span>.</h3>
                </div>
                <div className='text-white'>
                    <h3 className='text-2xl font-semibold'>Transportation</h3>
                    <ul className='text-xl font-medium mt-5'>
                        <li>Plane</li>
                        <li className='py-2'>Bus</li>
                        <li>Travel</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className='text-2xl font-semibold'>Short Link</h3>
                    <ul className='text-xl font-medium mt-5'>
                        <li>Home</li>
                        <li className='py-2'>Ticket</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className='text-2xl font-semibold'>Social Media</h3>
                    <ul className='text-xl font-medium mt-5'>
                        <li><a href="http://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li className='py-2'><a href="http://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="http://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div className='text-center pt-8 pb-4 text-white text-md font-medium'>
                <h3>Make With Love By Hellena</h3>
            </div>
        </div>
    </>
  )
}

export default Footer