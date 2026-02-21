import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { educations } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import { creator } from "../assets"; // Fallback icon

const EducationCard = ({ education }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232621' }}
            iconStyle={{ background: '#383E56' }}
            icon={
                <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
                    <img
                        src={education.image || creator}
                        alt={education.school_name}
                        className="w-[100%] h-[100%] object-cover object-center bg-white"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{education.school_name}</p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {education.points.map((point, index) => (
                    <li
                        key={`education-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
            <div className="mt-5 text-secondary text-[16px] font-semibold">{education.date}</div>
        </VerticalTimelineElement>
    );
};

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Academic Journey</p>
                <h2 className={styles.sectionHeadText}>Education</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {educations.map((education, index) => (
                        <EducationCard key={index} education={education} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
