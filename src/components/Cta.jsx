import ImgCar from '../assets/fortuner.png'
import { Link } from 'react-router-dom';


export default function Cta() {
    return (
     <div>


<div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
            </span>
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
            Temukan Kemudahan Perjalanan
                <span className="text-5xl sm:text-6xl">
                    Bersama Kami
                </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base dark:text-white">
            Kami hadir untuk menjadikan setiap momen perjalanan Anda lebih nyaman dan memuaskan. Dengan armada mobil terbaru dan layanan terbaik kami, kami siap membantu Anda menjelajahi tujuan impian Anda dengan mudah
            </p>
            <div className="flex mt-8">
                <Link to="/product" className="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400">
                    Cek Harga
                </Link>
                <Link to="/" className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md">
                    Pesan Sekarang
                </Link>
            </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          <img src={ImgCar} className="max-w-lg mx-auto md:max-w-full h-auto" />
        </div>
    </div>
</div>



      </div>
    );
  }
  