import { CheckIcon } from '@heroicons/react/20/solid'

export default function TableOffKey() {
  
  const cars = [
    {
      name: "Agya New",
      price12Hrs: "Rp. 250.000",
      price24Hrs: "Rp. 300.000",
      priceFullDay: "Rp. 275.000",
    },
    {
      name: "Agya New Matic",
      price12Hrs: "Rp. 300.000",
      price24Hrs: "Rp. 350.000",
      priceFullDay: "Rp. 325.000",
    },
    {
      name: "Brio New",
      price12Hrs: "Rp. 250.000",
      price24Hrs: "Rp. 300.000",
      priceFullDay: "Rp. 275.000",
    },
    {
      name: "Brio New Matic",
      price12Hrs: "Rp. 300.000",
      price24Hrs: "Rp. 350.000",
      priceFullDay: "Rp. 325.000",
    },
    {
      name: "Grand Avanza New",
      price12Hrs: "Rp. 250.000",
      price24Hrs: "Rp. 300.000",
      priceFullDay: "Rp. 275.000",
    },
    {
      name: "Grand Avanza New Matic",
      price12Hrs: "Rp. 300.000",
      price24Hrs: "Rp. 350.000",
      priceFullDay: "Rp. 325.000",
    },
    {
      name: "Avanza New FWD Manual",
      price12Hrs: "Rp. 300.000",
      price24Hrs: "Rp. 350.000",
      priceFullDay: "Rp. 325.000",
    },
    {
      name: "Inova Reborn Solar Manual",
      price12Hrs: "-",
      price24Hrs: "-",
      priceFullDay: "Rp. 500.000",
    },
    {
      name: "Inova Reborn Solar Matic",
      price12Hrs: "-",
      price24Hrs: "-",
      priceFullDay: "Rp. 550.000",
    },
    
  ];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 mt-5">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              Jenis Mobil ( Lepas Kunci )
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              12 Jam
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              24 Jam
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 bg-blue-50">
              Full Day
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 text-center">
          {cars.map((car, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {car.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.price12Hrs}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.price24Hrs}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{car.priceFullDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
