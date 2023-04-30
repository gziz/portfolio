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
    <div name='projects' className='w-full bg-[#0a192f] text-gray-300'>

        <div className='max-w-[1000px] mx-auto  p-8 flex flex-col justify-center w-11/12 h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-300'>Projects</p>
                <p className='pt-4'>Check out some of my recent projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-col-3 gap-4'>
                
                {data.map((item, index) => (

                    <div 
                    style={{ backgroundImage: `url(${item.image})` }}
                    className='shadow-2xl hover:shadow-cyan-500/60 group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/*Hover Effects*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <h2 className="mx-3 text-center text-2xl font bold text-white tracking-wider ">
                                {item.name}
                            </h2>
                            <div className='mx-5'>
                                <p className='text-sm text-center text-grey'>{item.description}</p>
                            </div>
                            
                            <div className=' text-center'>
                                {renderDemo(item)}
                                {renderGithub(item)}
                            </div>

                        </div>
                    </div>
                )                                
                )}

            </div>
        </div>
    </div>
  )
}

export default Work