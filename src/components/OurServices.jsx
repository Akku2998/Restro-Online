import React from 'react'

function OurServices() {
    return (
        <>
            <div className="w-full h-screen">
                <div className="left w-1/2 ml-10 mt-20 flex items-center">
                    <div className="w-40 h-5 bg-teal-600 transform rotate-90"></div>
                    <h1 className="text-6xl font-bold text-purple-900 px-10 leading-tight ml-4">
                        Our<br /> Services
                    </h1>
                    <div className="mt-8">
                        <p className="text-lg text-gray-500">
                            Lorem Ipsum dolor is sit amet,consectetur adipiscing elit, sed
                        </p>
                        <p className="text-lg text-gray-500">
                            do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                        <p className="text-lg text-gray-500">
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </p>
                        <p className="text-lg text-gray-500">
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="" style={{ backgroundImage: 'url(./dots-bg2.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div >
                        <img src="/advanced-table-booking.svg" className="ml-2" alt="table" />
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}
export default OurServices