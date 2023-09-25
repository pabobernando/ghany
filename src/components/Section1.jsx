import React from 'react'
import { CheckBadgeIcon, XMarkIcon, PhoneIcon  } from '@heroicons/react/24/outline'

function Section1() {
  return (
    <div>

<div className="container p-6 px-6 mx-auto bg-white dark:bg-gray-800">
    <div className="mb-16 text-center">
        <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            Ghany Tour Travel
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Mengapa sewa mobil di Ghany ?
        </p>
    </div>
    <div className="flex flex-wrap my-12 dark:text-white">
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
            <div className="flex items-center mb-6">
                <CheckBadgeIcon className='w-6 h-6 text-pink-500' />
                <div className="ml-4 text-xl">
                Kualitas Armada
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Setiap mobil dalam armada kami dipilih secara cermat dan dirawat dengan hati-hati untuk memastikan bahwa mereka selalu berada dalam kondisi terbaik. Kami menjamin bahwa setiap kendaraan yang Anda sewa dari kami akan memberikan kenyamanan dan keamanan yang tak tertandingi selama perjalanan Anda.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
            <div className="flex items-center mb-6">
            <CheckBadgeIcon className='w-6 h-6 text-pink-500' />
                <div className="ml-4 text-xl">
                Harga yang Bersaing
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Kami percaya bahwa perjalanan haruslah sesuatu yang dapat diakses oleh semua orang, dan harga yang bersaing adalah salah satu cara kami mewujudkannya. Jadilah bagian dari komunitas pelanggan kami yang puas dan nikmati perjalanan hemat tanpa mengorbankan kualitas.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
            <div className="flex items-center mb-6">
            <CheckBadgeIcon className='w-6 h-6 text-pink-500' />
                <div className="ml-4 text-xl">
                Jam Operasional Fleksibel
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Sepenuh hati mengerti bahwa perjalanan tidak selalu mengikuti jadwal tetap. Oleh karena itu, kami dengan senang hati menawarkan jam operasional yang fleksibel untuk memberikan Anda kenyamanan dan aksesibilitas sepanjang waktu.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
            <div className="flex items-center mb-6">
            <CheckBadgeIcon className='w-6 h-6 text-pink-500' />
                <div className="ml-4 text-xl">
                Keamanan dan Kebersihan
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Keamanan dan kebersihan adalah komitmen utama kami. Kami mengerti bahwa dalam dunia yang terus berubah, pelanggan kami mencari kenyamanan dan perlindungan ekstra selama perjalanan mereka. Itulah mengapa kami menjadikan keamanan dan kebersihan sebagai prioritas tertinggi dalam setiap aspek layanan kami.
            </p>
        </div>
        <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
            <div className="flex items-center mb-6">
            <CheckBadgeIcon className='w-6 h-6 text-pink-500' />
                <div className="ml-4 text-xl">
                Proses Pemesanan yang Mudah
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Memahami bahwa waktu Anda sangat berharga. Oleh karena itu, kami telah merancang proses pemesanan yang sederhana dan cepat sehingga Anda dapat mulai petualangan Anda hanya dalam sekejap mata.
            </p>
        </div>
        <div className="w-full p-8 md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6">
            <CheckBadgeIcon className='w-6 h-6 text-pink-500' />
                <div className="ml-4 text-xl">
                Pelayanan Pelanggan yang Ramah
                </div>
            </div>
            <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
            Bukan hanya penyedia mobil, tetapi juga partner perjalanan Anda yang selalu siap membantu dan memberikan perhatian penuh kepada kebutuhan Anda. Kami memahami bahwa perjalanan Anda adalah pengalaman pribadi, dan kami siap membuatnya lebih mudah dan lebih menyenangkan.
            </p>
        </div>
    </div>
</div>

    </div>
  )
}

export default Section1