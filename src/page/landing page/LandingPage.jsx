import React from 'react'
import {Link} from 'react-router-dom'

// Import component
import Navbar from '../../components/fragment/navbar/Navbar'
import CardAbout from '../../components/fragment/cardAbout/Card'
import CardTransportation from '../../components/fragment/cardTransportationLandingPage/Card'
import Footer from "../../components/fragment/Footer/Footer";

// Import image
import imageHero from '../../assets/image-hero.png'
import imageAbout from "../../assets/image-about.png"

function LandingPage() {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <section id='hero'>
          <div className='grid grid-cols-2 h-screen bg-[#F9F9F9]'>
              <div className='col-span-1 m-auto'>
                <img src={imageHero} alt="image hero"/>
              </div>
              <div className='col-span-1 w-9/12 m-auto'>
                <h3 className='text-2xl text-primary-purple font-normal'>Book Now</h3>
                <h1 className='text-6xl font-bold my-8'>
                  Let's Enjoy Your Trip With <span className='text-primary-purple'>Skuy</span>Travel<span className='text-primary-purple'>.</span>
                </h1>
                <p className='text-2xl font-normal'>
                Thinking of taking break from every day's busy life? Planning to go out of the country with your loved ones to have some fun and quality time in a cost effective way?
                </p>
                <Link to="/transportation"><button className='bg-primary-purple text-white px-7 py-2.5 mt-8 rounded-lg font-semibold'>Start Now</button></Link>
              </div>
          </div>
      </section>
      <section id='about'>
          <div className='grid grid-cols-12 h-screen'>
              <div className='col-span-5 m-auto'>
                <img src={imageAbout} alt="image about"/>
              </div>
              <div className='col-span-6 m-auto'>
                <h1 className='text-6xl font-bold w-8/12'>Sweet Memories Come To Life Again</h1>
                <p className='text-2xl font-normal my-10'>
                Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's OK. The journey change you
                </p>
                <CardAbout/>
              </div>
          </div>
      </section>
      <section>
          <div className='grid h-screen'>
            <div>
              <h1 className='text-6xl text-center font-bold'>Our Transportation</h1>
              <div className='bg-primary-purple w-1/4 h-3 mt-5 mx-auto rounded-full'></div>
            </div>
            <div className=''>
              <CardTransportation/>
            </div>
            <div className='m-auto'>
             <Link to="/transportation"><button className='bg-primary-purple text-white text-2xl font-medium py-3 px-6 rounded-lg'>Let's Start Our Journy</button></Link>
            </div>
          </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LandingPage