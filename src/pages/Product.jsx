import React from 'react'
import Navbar from '../components/Navbar'
import TableOff from '../components/TableOffKey'
import Section3 from '../components/Section3'
import TableOnKey from '../components/TableOnKey'
import ContentPrice from '../components/ContentPrice'


function Product() {
  return (
    <div>
        <Navbar />
        <Section3 />
        <TableOff />
        <ContentPrice />
        <TableOnKey />
    </div>
  )
}

export default Product