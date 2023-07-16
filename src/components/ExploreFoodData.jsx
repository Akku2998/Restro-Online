import React from 'react'
import ExploreFood from './ExploreFood'
import { foodData } from '../data/foodData'
export const ExploreFoodData = () => {
  return (
    <>
  <h1 className="heading_style py-8 text-center font-raleway tracking-wide font-semibold text-2xl mb-8 bg-white text-gray-500">Explore our Foods</h1>
  {foodData.map((item, index) => (
    <ExploreFood key={index} imgsrc={item.imgsrc} fname={item.fname} title={item.title} price={item.price} />
  ))}



  
</>

  )
}
