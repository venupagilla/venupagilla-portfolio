import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { skills } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const SkillCategoryCard = ({ index, category, items }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
        >
            <div className='mt-1'>
                <p className='text-white font-black text-[24px] mb-4'>{category}</p>
                <div className='mt-2 flex flex-wrap gap-2'>
                    {items.map((skill, idx) => (
                        <div key={idx} className="bg-tertiary px-3 py-1 rounded-full border border-secondary hover:scale-110 hover:border-white hover:shadow-card transition-all cursor-default">
                            <p className="text-secondary hover:text-white transition-colors text-[14px]">{skill}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className={`-mt-10 bg-black-100 rounded-[20px]`}>
            <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What I bring to the table</p>
                    <h2 className={styles.sectionHeadText}>Technical Skills</h2>
                </motion.div>
            </div>

            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {skills.map((skillGroup, index) => (
                    <SkillCategoryCard key={skillGroup.category} index={index} {...skillGroup} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, "skills");
