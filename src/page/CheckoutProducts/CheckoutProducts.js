import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckoutProducts = () => {
    const products=useLoaderData()
    const {img, name, price , details, _id}=products
    return (
        <div>
             <div className="flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">{name}</p>
                                <p className="text-base font-semibold leading-none text-gray-600">Price: ${price}</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src={img} alt="headphones" />
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                            <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                                <div>
                                 
                                </div>
                                <div>
                                    <p className="text-base leading-4">Pay</p>
                                </div>
                            </button>

                            <div className="flex flex-row justify-center items-center mt-6">
                                <hr className="border w-full" />
                                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">or pay with card</p>
                                <hr className="border w-full" />
                            </div>

                            <div className="mt-8">
                                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
                                </div>
                                <div className="flex-row flex">
                                    <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
                                    <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
                            <div className="mt-2 flex-col">
                                <div>
                                    <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                                </div>
                            </div>

                            <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
                            <div className="mt-2 flex-col">
                                <div className="relative">
                                    <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email">
                                        
                                    </button>
                                   
                                        <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
                                
                                 
                                </div>
                                <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
                            </div>

                            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                <div>
                                    <p className="text-base leading-4">Pay $54652</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CheckoutProducts;