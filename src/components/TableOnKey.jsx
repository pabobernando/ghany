import { CheckIcon } from '@heroicons/react/20/solid'

export default function TableOnKey() {
  
  const cars = [
    {
      name: "Agya New",
      price6Hrs:"Rp. 400.000",
      price12Hrs: "Rp. 500.000",
      priceFullDay: "Rp. 600.000",
      priceDropOut: "Rp. 300.000",
    },
    {
      name: "Brio New",
      price6Hrs:"Rp. 400.000",
      price12Hrs: "Rp. 500.000",
      priceFullDay: "Rp. 600.000",
      priceDropOut: "Rp. 300.000",
    },
    {
      name: "Grand New Avanza",
      price6Hrs:"Rp. 400.000",
      price12Hrs: "Rp. 500.000",
      priceFullDay: "Rp. 600.000",
      priceDropOut: "Rp. 300.000",
    },
    {
      name: "Avanza All New FWD",
      price6Hrs:"Rp. 450.000",
      price12Hrs: "Rp. 550.000",
      priceFullDay: "Rp. 650.000",
      priceDropOut: "Rp. 350.000",
    },
    {
      name: "Innova Reborn",
      price6Hrs:"Rp. 550.000",
      price12Hrs: "Rp. 700.000",
      priceFullDay: "Rp. 800.000",
      priceDropOut: "Rp. 450.000",
    },
    {
      name: "Toyota Hiace Comuter",
      price6Hrs:"Rp. 950.000",
      price12Hrs: "Rp. 1.200.000",
      priceFullDay: "Rp. 1.300.000",
      priceDropOut: "Rp. 800.000",
    },
    {
      name: "Hiace Premio & Elf Long",
      price6Hrs:"Rp. 1.100.000",
      price12Hrs: "Rp. 1.300.000",
      priceFullDay: "Rp. 1.500.000",
      priceDropOut: "Rp. 900.000",
    },
    
    
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 my-5">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              Jenis Mobil ( Sewa Mobil + Driver + Bbm )
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              6 Jam
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              12 Jam
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              Full Day
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              Drop Out
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 text-center">
          {cars.map((car, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {car.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.price6Hrs}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.price12Hrs}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.priceFullDay}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.priceDropOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
