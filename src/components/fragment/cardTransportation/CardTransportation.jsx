import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

const CardTransportation = () => {
    const [transportation, setTransportation] = useState([])

    useEffect(() => {
        getTransportation();
    }, []);

    const getTransportation = async () => {
        const response = await axios.get("http://localhost:8080/transportasi/api/v1/transportasi");
        setTransportation(response.data.transportasi);
    };

  return (
    <>
        <div>
                <div className='flex flex-row justify-around'>
                    {transportation.map((transportasi) => {
                        return(
                            <div className='bg-white rounded-2xl drop-shadow-lg w-1/4'>
                                <img src={`http://localhost:8080/image/transportation/${transportasi.gambar}`} alt="Image Cover" className='rounded-t-2xl w-full h-1/2'/>
                                <div className='pl-5'>
                                    <h1 className='font-medium text-4xl pt-5 text-center uppercase'>{transportasi.nama}</h1>
                                    <h3 className='text-lg py-3'>Jenis : {transportasi.jenis}</h3>
                                    <h3 className='text-lg pb-3'>Harga : Rp.{transportasi.harga}</h3>
                                    <h3 className='text-lg pb-3'>Rute : {transportasi.ruteAwal} - {transportasi.ruteAkhir}</h3>
                                    <Link to={`/pemesanan/${transportasi.id}`}><button className='bg-primary-purple text-white text-lg font-medium px-7 py-2 rounded-lg mb-5'>Book Now</button></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    </>
  )
}

export default CardTransportation