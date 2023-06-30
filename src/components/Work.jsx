import React from 'react'
import { data } from "../data/data.js";

import {
    FaGithub,
    FaLink
  } from 'react-icons/fa';

function Work() {

    const renderDemo = (item) => {
        if (item.demo !== ""){
            return <a href={item.demo}>
                        <button className='flex-col text-center rounded-lg px-4 py-3 m-2'>
                            <FaLink size={32}/>
                        </button>
                    </a>
        }
    };

    const renderGithub = (item) => {
        if (item.github !== ""){
            return <a href={item.github}>
                        <button className='flex-col text-center rounded-lg px-4 py-3 m-2'>
                            <FaGithub size={34}/>
                        </button>
                    </a>
        }
    };

    return (
        <div name='projects' className='w-full bg-[#0a192f]'>
    
            <div className='max-w-[1000px] mx-auto  p-8 flex flex-col justify-center w-11/12 h-full'>
                <div className='text-gray-300 pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-300'>Projects</p>
                    <p className='  pt-4'>Check out some of my recent projects</p>
                </div>
    
                <div className='grid sm:grid-cols-2 md:grid-col-3 gap-5'>
                    
                {data.map((item, index) => (
                    <div class="rounded overflow-hidden shadow-2xl bg-white">
                        <img class="w-full" src={item.image} alt="Sunset in the mountains"/>
                        <div class="px-6 py-2 border-2 border-t-indigo-500">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    
                        </div>
                        <div class="px-6 pt-2 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
    
                ))}
    
                </div>
            </div>
        </div>
      )
}

export default Work