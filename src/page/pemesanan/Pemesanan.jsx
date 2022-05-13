import React,{useState} from 'react'
import ImagePemesanan from '../../assets/image-pemesanan.svg'
import axios from 'axios'

// initial component
import Footer from '../../components/fragment/Footer/Footer'

function Pemesanan() {
  const[nama, setNama] = useState('')
  const[pembayaran, setPembayaran] = useState('')
  const[tanggal_keberangkatan, setTanggal_keberangkatan] = useState('')
  const[kursi, setKursi] = useState('')

  

  const Pemesanan = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/pemesanan/api/v1/:id", {
      nama: nama,
      pembayaran: pembayaran,
      tanggal_keberangkatan: tanggal_keberangkatan,
      kursi: kursi
    });

    console.log(nama,pembayaran,tanggal_keberangkatan,kursi)

    setTimeout(() => {
      setNama('')
      setPembayaran('')
      setTanggal_keberangkatan('')
      setKursi('')
    }, 1000);
  };

  return (
    <>
      <div className='grid grid-cols-3 bg-[#F9F9F9]'>
        <div className='col-span-1 bg-white rounded-br-[10rem] shadow-xl'>
          <h1 className='text-center text-3xl font-bold my-5 text-primary-purple'>Pemesanan Tiket</h1>
          <div className='ml-28 mt-10'>
            <form method='POST' onSubmit={Pemesanan}>
              <label className='text-2xl'>Nama</label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
              />
              <label className='text-2xl'>Kursi</label>
              <input
                type="text"
                name="kursi"
                id="kursi"
                value={kursi}
                onChange={(e) => setKursi(e.target.value)}
                className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
              />
              <label className='text-2xl'>Tanggal Keberangkatan</label>
              <input
                type="text"
                name="tanggal_keberangkatan"
                id="tanggal_keberangkatan"
                value={tanggal_keberangkatan}
                onChange={(e) => setTanggal_keberangkatan(e.target.value)}
                className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
              />
              <div className='flex flex-col'>
                <label className='text-2xl'>Pembayaran</label>
                <input
                type="text"
                name="pembayaran"
                id="pembayaran"
                value={pembayaran}
                onChange={(e) => setPembayaran(e.target.value)}
                className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
              />
                {/* <select id='pembayaran' name='pembayaran' className='w-96 border-2 rounded-lg px-6 py-4 mb-9 bg-white'>
                  <option value={pembayaran} onChange={(e) => setPembayaran(e.target.value)}>Transfer</option>
                  <option value={pembayaran} onChange={(e) => setPembayaran(e.target.value)}>Cash</option>
                </select> */}
              </div>
              <button type='submit' className='uppercase bg-primary-purple text-white font-semibold text-2xl py-2 px-8 rounded-lg'>pesan</button>
            </form>
          </div>
        </div>
        <div className='col-span-2'>
          <img src={ImagePemesanan} alt="image background" className='m-auto h-screen w-3/4'/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Pemesanan