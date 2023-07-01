import React from 'react'
import { data } from "../data/data.js";
import {
    FaGithub,
    FaLink,
    FaExternalLinkAlt
  } from 'react-icons/fa';

function openLinks(project) {
    window.open(project.github, '_blank');
    //window.open("https://www.github.com/", '_blank');
}

function Work() {

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
                                <div className="flex justify-between items-center my-2">
                                    <div className="font-bold text-xl text-gray-300">{item.title}</div>
                                        <a href={item.github} target="_blank" rel="noopener noreferrer" 
                                            onClick={(e) => {
                                                e.preventDefault(); 
                                                openLinks(item);
                                            }}
                                            >
                                                <FaExternalLinkAlt style={{ color: '#fff' }}/>
                                        </a>
                                        
                                </div>
                                <p className="text-gray-400 text-base">
                                    {item.description}
                                </p>
                            </div>

                            <div className="px-4 py-2">
                                {item.technologies.map((tech, index) => (
                                    <div className="group inline-block w-9 mr-4 relative cursor-pointer">
                                        <img src={`${process.env.PUBLIC_URL}/assets/icons/${tech.icon}`} alt={tech.name}/>
                                        <div className="absolute text-sm bg-black text-white p-1 opacity-0 group-hover:opacity-100 -top-full left-1/2 transform -translate-x-1/2">
                                            {tech.name}
                                        </div>
                                    </div>
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