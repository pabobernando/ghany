const posts = [
    {
      id: 1,
      title: 'Bunker Kaliadem',
      description:
        'Bunker Kaliadem adalah sebuah tempat perlindungan yang terletak di lereng Gunung Merapi, Yogyakarta. Dibangun untuk menghadapi potensi letusan gunung berapi, bunker ini menawarkan pengunjung kesempatan untuk memahami persiapan darurat yang dilakukan di wilayah rawan bencana. Selain itu, Anda dapat menjelajahi sejarah letusan Gunung Merapi dan melihat fasilitas yang ada di dalam bunker. Pengalaman unik ini memberikan wawasan tentang ketangguhan manusia di tengah alam yang kuat',
      imageUrl:
        'https://imgs.search.brave.com/dRfTRRghWMz5BJRI7mL-NFUaDpPthPX9aMspbRU6INM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9rZW1i/YWxpa2Vqb2dqYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDEvQnVua2Vy/LUthbGlhZGVtLVRl/bXBhdC1XaXNhdGEt/ZGVuZ2FuLVBlc29u/YS1HdW51bmctTWVy/YXBpLmpwZw',
      date: 'Sep 27, 2023',
      datetime: '2023-09-27',
      category: { title: 'Sleman' },
      author: {
        name: 'Ghany Tour Travel',
        role: 'Yogyakarta',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Kalibiru',
        description:
          'Kalibiru adalah sebuah destinasi wisata alam yang memukau di Yogyakarta, Indonesia. Terletak di kawasan perbukitan, Kalibiru menawarkan pemandangan spektakuler dari atas pepohonan hutan dan danau yang memikat. Pengunjung dapat mengeksplorasi jembatan gantung yang mengayun di atas lembah, serta berfoto di berbagai spot menakjubkan dengan latar belakang alam yang indah. Selain itu, Anda dapat merasakan kehidupan pedesaan dengan berinteraksi dengan masyarakat setempat dan mencoba berbagai kegiatan seperti memancing atau berkeliling dengan Jeep. Kalibiru adalah destinasi yang sempurna untuk melarikan diri dari keramaian kota dan menikmati keindahan alam Jawa Tengah.',
        imageUrl:
          'https://imgs.search.brave.com/aAtXtD7h_Ku99NImjhI_N6hkhnY2uWVVlNWd6BNh234/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pZGV0/cmlwcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDEv/a2FsaWJpcnUtbmF0/aW9uYWwtcGFyay0y/LmpwZw',
        date: 'Sep 27, 2023',
        datetime: '2023-09-27',
        category: { title: 'Kulon Progo' },
        author: {
          name: 'Ghany Tour Travel',
          role: 'Yogyakarta',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    
  ]
  
  export default function Recomend2() {
    return (
      <div className="bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Jelajahi tempat ini dan temukan keajaiban tersembunyi di setiap sudutnya</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Di sinilah petualangan sejati dimulai, di bawah langit biru yang luas dan pemandangan alam yang menakjubkan  
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  