import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { styles } from '../styles';
import { github } from '../assets';
import { fadeInw, textVariantw } from '../utils/motion';

const AllProjects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full flex-col md:flex-row flex h-[calc(100vh-80px)] mt-[80px] bg-primary overflow-hidden">

            {/* Left fixed panel */}
            <div className="md:w-[40%] w-full md:h-full p-4 sm:p-8 border-b md:border-b-0 md:border-r border-secondary/20 flex flex-col bg-black-100/50 overflow-hidden shrink-0">
                <motion.div
                    key={selectedProject.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full w-full min-h-0"
                >
                    <div className="relative w-full h-[200px] sm:h-[300px] rounded-2xl overflow-hidden shadow-card mb-4 shrink-0">
                        {selectedProject.image ? (
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-tertiary flex items-center justify-center">
                                <span className="text-secondary opacity-50">No Image</span>
                            </div>
                        )}
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() => window.open(selectedProject.source_code_link, "_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform">
                                <img src={github}
                                    alt="github"
                                    className="w-1/2 h-1/2 object-contain" />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 mb-3 w-full">
                        <h2 className="text-white font-bold text-[24px] sm:text-[32px] leading-tight flex-grow break-words">{selectedProject.name}</h2>
                        {selectedProject.deployed && (
                            <span className="bg-green-500/20 text-green-400 text-[10px] sm:text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider h-fit shrink-0 relative flex items-center mt-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 left-0 top-0"></span>
                                <span className="relative">Deployed</span>
                            </span>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3 max-h-[50px] overflow-hidden shrink-0">
                        {selectedProject.tags.map(tag => (
                            <span key={tag.name} className={`px-2 py-1 text-[10px] rounded-full bg-tertiary ${tag.color}`}>
                                #{tag.name}
                            </span>
                        ))}
                    </div>

                    <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed flex-grow overflow-y-auto min-h-0 custom-scrollbar">
                        {selectedProject.description}
                    </p>

                    <div className="w-full mt-4 flex gap-4 shrink-0">
                        {selectedProject.deployed && selectedProject.live_demo_link && (
                            <button
                                onClick={() => window.open(selectedProject.live_demo_link, "_blank")}
                                className="flex-1 bg-tertiary py-3 rounded-xl text-white font-bold text-[14px] sm:text-[16px] hover:bg-black-200 transition-colors"
                            >
                                View Live Project
                            </button>
                        )}
                        <button
                            onClick={() => window.open(selectedProject.source_code_link, "_blank")}
                            className="flex-1 bg-black-gradient py-3 rounded-xl text-white font-bold text-[14px] sm:text-[16px] border border-secondary/20 hover:border-white/50 transition-colors"
                        >
                            View Project Repo
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Right scrolling panel */}
            <div className="md:w-[60%] w-full h-full p-4 sm:p-8 overflow-y-auto">
                <motion.div variants={textVariantw()}>
                    <p className={`${styles.sectionSubText} text-center md:text-left`}>Explore my work</p>
                    <h2 className={`${styles.sectionHeadText} text-center md:text-left mb-10`}>All Projects.</h2>
                </motion.div>

                <div className="flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={`all-project-${index}`}
                            variants={fadeInw("up", "spring", index * 0.1, 0.75)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-stretch
                        ${selectedProject.name === project.name ? 'bg-black-200 shadow-card border border-white/10 scale-[1.02]' : 'bg-tertiary hover:bg-black-200/80 hover:scale-[1.01]'}`}
                        >
                            <div className="w-full sm:w-[200px] h-[150px] shrink-0 rounded-xl overflow-hidden relative">
                                {project.image ? (
                                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-primary flex items-center justify-center">
                                        <span className="text-secondary text-[10px] opacity-50">No Image</span>
                                    </div>
                                )}
                                {selectedProject.name === project.name && (
                                    <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
                                        <span className="bg-black/80 px-3 py-1 rounded-full text-white text-[12px] font-bold tracking-widest backdrop-blur-sm">VIEWING</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col justify-between py-2 w-full">
                                <div>
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-white font-bold text-[20px]">{project.name}</h3>
                                        <div onClick={(e) => { e.stopPropagation(); window.open(project.source_code_link, "_blank"); }} className="p-2 bg-black-gradient rounded-full hover:scale-110 transition-transform">
                                            <img src={github} alt="github" className="w-4 h-4 object-contain" />
                                        </div>
                                    </div>
                                    <p className="mt-2 text-secondary text-[13px] line-clamp-3 leading-relaxed">{project.description}</p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <p key={tag.name} className={`text-[10px] ${tag.color}`}>#{tag.name}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AllProjects;
