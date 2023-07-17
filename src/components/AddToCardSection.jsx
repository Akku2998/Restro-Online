import React from 'react'

function AddToCardSection() {
    return (
        <>
            <div className="w-full h-screen bg-gray-200">
                <div className="right-sidebar w-1/3 h-screen absolute right-0 top-0 bg-teal-600"></div>
                <div className="content flex justify-between">

                    <div className="left w-1/2 ml-10 mt-60 flex items-start">
                        <div className="w-60 h-5 bg-teal-600 transform rotate-90"></div>
                        <div className="ml-4">
                            <h1 className="text-6xl font-bold text-purple-900 px-10 leading-tight">
                                Download app for Exciting deal
                            </h1>
                            <div className="mt-8">
                                <p className="mt-2 text-sm text-gray-500">
                                    Lorem Ipsum dolor is sit amet,
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    consectetur adipiscing elit, sed do 
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    eiusmod tempor incididunt ut labore
                                </p>
                            </div>
                        </div>
                    </div>
                    <img
                        src="./dots-bg1.png"
                        alt="dooot"
                        className="w-1/4 h-120 absolute right-60 mt-40"
                    />
                    <img
                        src="./1cauliflower.png"
                        alt="veghh"
                        className="transform rotate-20 absolute right-60 mt-40"
                    />
                    <img
                        src="./app-screen.png"
                        alt="plate"
                        className="w-1/4 h-120 absolute right-60 mt-40"
                    />
                </div>
            </div>

        </>
    )
}
export default AddToCardSection
