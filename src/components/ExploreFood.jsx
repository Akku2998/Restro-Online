import React from 'react'

function ExploreFood (props)  {
  return (
    <>
    <div className="w-full h-auto">
    <div className="card m-6 transition-all duration-400 ease-in bg-white w-1/5 rounded-2xl shadow-md float-left">
    <img src={props.imgsrc} alt="mypic" className="card_img w-full h-235 border-tl-12 border-tr-12" />
    <div className="card_info bg-white border-tl-12 border-tr-12 p-6">
    <h3 className="card_title mt-5 mb-10 font-raleway bg-white capitalize">{props.fname}  <span className="ml-16">{props.price}</span></h3>
    
    <span className="card_category uppercase font-raleway text-xs tracking-widest font-medium text-gray-600 bg-white">{props.title}</span>
   

         
        </div>
      </div>
    </div>
    </>
  )
}
export default ExploreFood 
