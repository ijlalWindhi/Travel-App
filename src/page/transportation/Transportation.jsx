// Import required components
import Navbar from "../../components/fragment/navbar/Navbar";
import Footer from "../../components/fragment/Footer/Footer"
import CardTransportation from '../../components/fragment/cardTransportation/CardTransportation';

function Transportation() {
  if(localStorage.getItem("email") === null){
      window.location = "/login"
  }


  return (
    <>
        <Navbar />
            <div className='h-screen mt-10'>
                <div>
                    <div>
                        <CardTransportation/>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default Transportation