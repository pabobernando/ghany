import React from 'react'
import { EnvelopeIcon, UserGroupIcon, CreditCardIcon  } from '@heroicons/react/24/solid'

function Service() {
  return (
    <div>

        

<div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div className="w-full px-4 py-4 mt-6 bg-gray-50 border border-blue-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
            <EnvelopeIcon  className='w-6 h-6'/>
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Email
        </h3>
        <p className="py-4 text-gray-500 text-md ">
            ghany_tourtravel@yahoo.co.id
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-gray-50 border border-blue-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <UserGroupIcon className='w-6 h-6' />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Nomor Telephone
        </h3>
        <p className="py-4 text-gray-500 text-md ">
            (+62) 852-0102-2226
        </p>
        <p className=" text-gray-500 text-md ">
            (+62) 813-2936-4866
        </p>
    </div>
    <div className="w-full px-4 py-4 mt-6 bg-gray-50 border border-blue-500 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <CreditCardIcon className='w-6 h-6' />
            </div>
        </div>
        <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
            Alamat
        </h3>
        <p className="py-4 text-gray-500 text-md ">
        Jl. Ponco Wiryo, Gn. Gempal, Giri Peni, Kec. Wates, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55651
        </p>
    </div>
</div>

    </div>
  )
}

export default Service