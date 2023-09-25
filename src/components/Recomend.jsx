import React from 'react'
import Keraton from '../assets/Kraton.jpg'
import Paris from '../assets/parangtritis.jpeg'
import Borobudur from '../assets/borobudur.jpg'

function Recomend() {
  return (
    <div>
        <section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-2">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Rekomendasi Wisata Jogja
      </h2>

      <p className="max-w-xl mx-auto mt-4 text-gray-500">
      Jogja, atau Yogyakarta, adalah surga bagi para pencinta perjalanan. Kota ini penuh dengan keajaiban alam, sejarah yang kaya, dan budaya yang memukau. Di bawah ini adalah beberapa rekomendasi wisata yang tidak boleh Anda lewatkan saat mengunjungi kota ini. Setiap destinasi adalah potongan kecil dari pesona Jogja yang tak terlupakan.
      </p>
    </header>

    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <a href="#" className="relative block group">
          <img
            src={Paris}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Pantai Parangtritis</h3>

            <span
              className="mt-1.5 inline-block px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Pantai Parangtritis, salah satu tujuan pantai paling ikonik di Jogja. Pantai ini terkenal dengan keindahan pasir hitamnya yang luas, ombak besar yang cocok untuk berselancar, dan suasana pantai yang memikat
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="relative block group">
          <img
            src={Borobudur}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-white">Candi Borobudur</h3>

            <span
              className="mt-1.5 inline-block  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Candi Borobudur, keajaiban dunia yang tersembunyi di tengah keindahan alam Jogja. Candi Borobudur adalah pusat spiritualitas dan keagamaan yang megah, dan juga merupakan destinasi wisata yang sangat menakjubkan.
            </span>
          </div>
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" className="relative block group">
          <img
            src={Keraton}
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-bold text-white">Karaton Yogyakarta</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
               Mengunjungi Keraton adalah seperti melangkah ke dalam lembaran sejarah Jawa yang hidup. Terletak di tengah kompleks istana yang indah, Anda akan merasakan nuansa kerajaan yang autentik
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
    </div>
  )
}

export default Recomend