const testimonials = [
    {
      body: 'Mobilnya habis semua? Nggak bakal deh, pengalaman baik ketika kami keluarga ada keperluan dadakan, malam2 cari mobil ternyata walaupun sudah full pemilik nggak nyerah begitu aja, kita tetap dicarikan sampai dapattt. Harga pun sama meskipun armadanya "nyebrak" ditempat lain. Mantaaabbb. Armada taun muda semua ya disini. Buka sepanjang waktu kayaknya',
      author: {
        name: 'Yohana Triass',
        handle: 'yohanatriass',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        body: 'Tidak hanya melayani persewaan kendaraan roda dua dan roda empat, tempat ini juga terdapat layanan cuci mobil 24 jam.Driver mobil rental ramah',
        author: {
          name: 'kam kam maa',
          handle: 'kamkammaa',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Pelayananya bagus,bisa antr jmput kendaraan,jdi kita tinggl nunggu di rumah. Mobil2nya baru juga terawat jadi msh enak.',
        author: {
          name: 'hermes li',
          handle: 'hermesli',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Bagus dan sangat memuaskan.. pelayanan sangat bagus..',
        author: {
          name: 'Aroel Oesman',
          handle: 'aroeloesman',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Pelayanan memuaskan. Bikin nagih kalau jalan² ke jogja',
        author: {
          name: 'kholiq stiawan',
          handle: 'kholiqstiawan',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Memuaskan',
        author: {
          name: 'sastro mobilindo',
          handle: 'sastromobilindo',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      
    // More testimonials...
  ]
  
  export default function Testimonial() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Kami bangga melayani ribuan pelanggan yang puas dalam perjalanan mereka. Ini adalah beberapa testimonial dari pelanggan setia kami yang telah merasakan kualitas layanan sewa mobil kami
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-1">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  