import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { achievements } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, issuer }) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className='bg-black-200 p-6 rounded-2xl sm:w-[320px] w-full border border-secondary border-opacity-30'
        >
            <div className='mt-1'>
                <p className='text-white font-bold text-[18px]'>{title}</p>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-[#915eff] text-[14px]">Issued by:</span>
                    <span className="text-secondary text-[14px] font-semibold">{issuer}</span>
                </div>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <div className={`-mt-10 bg-black-100 rounded-[20px] pb-10`}>
            <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My accomplishments</p>
                    <h2 className={styles.sectionHeadText}>Certifications</h2>
                </motion.div>
            </div>

            <div className={`-mt-10 ${styles.paddingX} flex flex-wrap gap-7 items-stretch`}>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={index} index={index} {...achievement} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Achievements, "achievements");
