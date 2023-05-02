import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
//import "react-vertical-timeline-component/style.min.css";
import '../assets/react-timeline.css';

import {
    FaGraduationCap,
  } from 'react-icons/fa';
import metaLogo from '../assets/metaLogo.png';

function Experience() {
  return (
    <div name='experience' className='w-full bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto  p-8 flex flex-col justify-center w-11/12 h-full z-0'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-sky-300'>Experience</p>
            </div>

            <VerticalTimeline lineColor="#3e497a" className="z-0">
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2020 - 2024"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<FaGraduationCap />}
                >
                <h3 className="vertical-timeline-element-title">
                    Data Science Bachelors
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                    - Monterrey Institute of Technology
                </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="01/2023 - present"
                iconStyle={{ background: "#ccd6f6", color: "#fff", display:"flex", justifyContent:"center"}}
                icon={<img src={metaLogo} alt="Meta Logo" style={{ width: "75%", objectFit: "contain"}} />}
                
                >
                <h3 className="vertical-timeline-element-title">
                    Software Engineering Fellow
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    - MLH x Meta
                </h4>
                <ul>
                    <li>Work on Meta's natural language processing libraries to integrate transformer features based on AI literature.</li>
                </ul>
                <p>
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  );
}

export default Experience;
