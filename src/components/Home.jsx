import React, { useState } from 'react'
import Cardsdata from './CardData'
import { AiFillStar } from "react-icons/ai"

const Home = () => {
    const [data, setData] = useState(Cardsdata)
    return (
        <div className=' '>
            <h1 className='text-3xl text-center font-bold mt-3'>Welcome to Shopping Cart</h1>
            <div className='flex justify-center items-center flex-wrap' >
                {data.map((ele, id) => {
                    return (
                        <div class="max-w-sm mx-5 my-5 p-2 bg-white  hover:border border-white border hover:border-gray-200 rounded-lg shadow ">

                            <a href="#" className=''>
                                <img class="rounded-t-lg w-full h-[250px] object-cover " src={ele.imgdata} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#" className='' >
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.rname}</h5>
                                </a>
                                <div className='flex justify-between items-center'>
                                    <span className='font-bold'>
                                        {ele.dish}
                                    </span>
                                    <span className='flex gap-2 justify-center items-center font-bold py-1 px-4 rounded bg-green-600 text-white'>
                                        {ele.rating}
                                        <AiFillStar className='text-yellow-300' />
                                    </span>
                                </div>
                                <div className='flex justify-between items-center mt-2'>
                                    <span className='text-gray-700'>
                                        {ele.address}
                                    </span>
                                    <span className=''>
                                        ${ele.price}
                                    </span>
                                </div>

                                <hr />
                                <p class="mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button class="inline-flex justify-center w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add To Cart
                                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Home