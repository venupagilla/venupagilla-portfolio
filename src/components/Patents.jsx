import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { patents } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";

const PatentCard = ({ index, title, application_number, status, date, description }) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className='bg-tertiary p-8 rounded-2xl w-full border border-[rgba(145,94,255,0.2)] hover:border-[rgba(145,94,255,0.5)] transition-colors duration-300'
        >
            <div className='mt-1 flex flex-col lg:flex-row gap-8 justify-between'>
                <div className="flex-1">
                    <p className='text-white font-bold text-[22px] mb-4'>{title}</p>
                    <div className="flex flex-col gap-2 max-w-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-[#915eff] text-[13px] uppercase tracking-wider font-semibold">App. Number:</span>
                            <span className="text-secondary text-[14px]">{application_number}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#915eff] text-[13px] uppercase tracking-wider font-semibold">Status:</span>
                            <span className={`text-[14px] font-bold ${status.toLowerCase() === 'granted' ? 'text-green-400' : 'text-yellow-400'}`}>{status}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#915eff] text-[13px] uppercase tracking-wider font-semibold">Date:</span>
                            <span className="text-secondary text-[14px]">{date}</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 lg:border-l lg:border-[rgba(255,255,255,0.1)] lg:border-t-0 lg:pl-8 lg:pt-0 pt-4 border-t border-[rgba(255,255,255,0.1)]">
                    <p className="text-[#915eff] text-[14px] uppercase tracking-wider font-bold mb-2">Description</p>
                    <p className="text-secondary text-[15px] leading-[26px]">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Patents = () => {
    return (
        <div className={`-mt-10 bg-black-100 rounded-[20px] pb-10`}>
            <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>My Intellectual Property</p>
                    <h2 className={styles.sectionHeadText}>Patents</h2>
                </motion.div>
            </div>

            <div className={`-mt-10 ${styles.paddingX} flex flex-wrap gap-7 items-stretch`}>
                {patents.map((patent, index) => (
                    <PatentCard key={index} index={index} {...patent} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Patents, "patents");
