import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
        >
            <div className="flex flex-col items-center">
                {/* Simple animated spinner ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-16 h-16 border-4 border-t-[#915EFF] border-r-transparent border-b-[#915EFF] border-l-transparent rounded-full mb-6"
                />

                {/* Brand text */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-white font-bold text-2xl tracking-widest uppercase"
                >
                    Loading
                </motion.h1>
                <div className="flex mt-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: dot * 0.1,
                                ease: "easeInOut"
                            }}
                            className="w-2 h-2 bg-[#915EFF] rounded-full mx-1"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
