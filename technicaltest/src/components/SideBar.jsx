import React from 'react'


function SideBar() {

    return (
        <div className="h-screen bg-gray-200 flex w-screen flex-row">
            <nav className="h-full w-80 bg-gray-200" style={{ width: '20' }}>
                <div className="w-full h-1/6">
                    <div className="h-screen bg-yellow-500">
                        <div className="w-full h-full px-5">
                            <div className=" w-72 pt-32 mb-20">
                                <h1 className="text-center cursor-pointer text-white font-semibold text-4xl">
                                    Covid-19
                                </h1>
                            </div>
                            <div className=" items-center">
                                <div className="m-10">
                                    <p className="text-2xl cursor-pointer hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white">Dashboard</p>
                                </div>
                                <div className="m-10">
                                    <p className="text-2xl text-white hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full cursor-pointer">About</p>
                                </div>
                                <div className="m-10">
                                    <p className="text-2xl cursor-pointer hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white">Contact</p>
                                </div>
                                <div className="flex flex-col pt-10">
                                    <p className="text-2xl hover:text-gray-900 focus:text-gray-900 transition hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline rounded-full text-white cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SideBar
