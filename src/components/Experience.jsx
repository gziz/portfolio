import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import '../assets/react-timeline.css';

import {
    FaGraduationCap,
  } from 'react-icons/fa';
import metaIcon from '../assets/meta.png';
import oracleIcon from '../assets/oracle.png';

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
                    icon={<FaGraduationCap />}>
                        <h3 className="vertical-timeline-element-title">
                            Data Science Bachelors
                        </h3>

                        <h4 className="vertical-timeline-element-subtitle">
                            Monterrey Institute of Technology
                        </h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="01/2023 - 05/2023"
                    iconStyle={{ background: "#ccd6f6", color: "#fff", display:"flex", justifyContent:"center"}}
                    icon={<img src={metaIcon} alt="Meta Logo" style={{ width: "75%", objectFit: "contain"}} />}>
                        <h3 className="vertical-timeline-element-title">
                            Meta x MLH
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Software Engineering Fellow
                        </h4>
                        <ul>
                            <li>Worked on Meta's NLP open-source libraries to integrate transformer features based on AI literature.</li>
                        </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="06/2023 - present"
                    iconStyle={{ background: "#fff", color: "#fff", display:"flex", justifyContent:"center"}}
                    icon={<img src={oracleIcon} alt="Meta Logo" style={{ width: "75%", objectFit: "contain"}} />}>
                        <h3 className="vertical-timeline-element-title">
                            Oracle
                        </h3>      
                        <h4 className="vertical-timeline-element-subtitle">
                            Software Engineering Intern
                        </h4>
                        <ul>
                            <li>Working on Oracle Cloud Infra (ML and Analytics Application).</li>
                        </ul>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    </div>
  );
}

export default Experience;
