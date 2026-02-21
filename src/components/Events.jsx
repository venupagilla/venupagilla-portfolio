import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { events } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const EventCard = ({ index, title, description, date }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='bg-tertiary p-8 rounded-3xl xs:w-[320px] w-full border border-[rgba(255,255,255,0.1)]'
        >
            <div className='mt-1'>
                <p className='text-white font-black text-[20px]'>{title}</p>
                <p className='mt-2 text-secondary text-[14px] leading-[22px]'>{description}</p>

                <div className="mt-4 flex flex-row items-center gap-2">
                    <p className="text-secondary text-[12px] uppercase tracking-wider font-semibold">{date}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Events = () => {
    return (
        <div className={`-mt-10`}>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My Extra-curricular</p>
                <h2 className={styles.sectionHeadText}>Events & Activities</h2>
            </motion.div>

            <div className={`mt-10 flex flex-wrap gap-7`}>
                {events.map((eventItem, index) => (
                    <EventCard key={index} index={index} {...eventItem} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Events, "events");
