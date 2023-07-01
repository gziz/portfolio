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
                <div className='text-gray-300 pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-sky-300'>Projects</p>
                    <p className='pt-4'>Check out some of my recent projects</p>
                </div>
    
                <div className='grid sm:grid-cols-2 md:grid-col-3 gap-5'>
                    
                    {data.map((item, index) => (
                        <div className="rounded overflow-hidden shadow-lg shadow-[#040c16] bg-[#192231]">

                            <img className="w-full" src={`${process.env.PUBLIC_URL}/assets/projects/${item.imgFile}`} alt="Sunset in the mountains"/>
                            <div className="px-6 py-2">
                                <div className="font-bold text-xl mb-2 text-gray-300">{item.title}</div>
                                <p className="text-gray-400 text-base">
                                    {item.description}
                                </p>
                            </div>
                            <div className="px-4 pt-2 pb-2">
                                {item.technologies.map((tech, index) => (
                                    <img className="inline-block w-9 mr-4" src={`${process.env.PUBLIC_URL}/assets/icons/${tech.icon}`} alt={tech.name}/>
                                ))}
                            </div>
                        </div>
                    ))}

    
                </div>
            </div>
        </div>
      )
}

export default Work