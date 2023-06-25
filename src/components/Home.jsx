import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name = 'home' className=' w-full h-screen bg-[#0a192f]'>
      <div className='w-11/12 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-xl text-cyan-600'>Hi there, I'm</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Gerardo Moreno
        </h1>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        A junior data science major, interested in leveraging software engineering and mathematics for problem-solving, task optimization,
        and better decision making.
        </p>

        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600'>
              <Link className='flex' to='projects' smooth={true} duration={500}>
                Checkout out my projects
              </Link>
            </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
