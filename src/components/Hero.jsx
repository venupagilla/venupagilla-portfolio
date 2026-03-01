import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Venu</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I build AI-powered and <br className='sm:block hidden' />full-stack applications.</p>
          <div className='mt-8 flex flex-row gap-4'>
            <a
              href="https://drive.google.com/file/d/1ACshQ3XoctoXP-7XcRgl5ClS4BYKhv2w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-tertiary border border-secondary/30 hover:border-[#915eff] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-black-200 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer relative z-10'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#915eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }} className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero