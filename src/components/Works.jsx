import { Tilt } from "react-tilt"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeInw, textVariantw } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_demo_link, deployed }) => {
  return (
    <motion.div variants={fadeInw("up", "spring",
      index * 0.5, 0.75)} onClick={() => window.open(live_demo_link, "_blank")} className="w-full h-full flex flex-col">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl
                  sm:w-[360px] w-full h-full cursor-pointer flex flex-col">
        <div className="relative w-full h-[230px] shrink-0">
          {image ? (
            <img src={image}
              alt={name}
              className="w-full h-full object-fit rounded-2xl" />
          ) : (
            <div className="w-full h-full bg-black-200 rounded-2xl flex justify-center items-center">
              <span className="text-secondary text-[12px] opacity-50">No Image</span>
            </div>
          )}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-grow">
          <div className="flex items-center gap-3">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            {deployed && (
              <span className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider relative flex h-full items-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 left-0 top-0"></span>
                <span className="relative">Deployed</span>
              </span>
            )}
          </div>
          <p className="mt-2 text-secondary text-[12px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 shrink-0">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[10px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div variants={textVariantw()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeInw("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" >
          Following projects showcases my skills and experience through real-world examples
          of my work. Each project is briefly described with links to code repos and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 scrolling-wrapper">
        <div className="scrolling-container items-stretch">
          {[...projects, ...projects].map((project, index) => (
            <div key={`project-${index}`} className="w-[300px] sm:w-[360px] flex-shrink-0 h-auto flex flex-col">
              <ProjectCard
                index={index % projects.length}
                {...project}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate('/projects')}
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-black-200 transition-colors"
        >
          View All Projects
        </button>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")