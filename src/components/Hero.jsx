import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Rishabh Dev</span>
        </h1>
        <p className={`${styles.heroSubText}  mt-2 text-white-100`}>
          Java Full Stack Developer 
          {/* <span className='px-5'>
          <a href='https://drive.google.com/file/d/1axl7YjBfD5c8om0C0_Dk0HKSy3dLdODo/view?usp=sharing' target="_blank">click</a>
          <button
              className="cursor-pointer bg-[#915EFF] px-2 py-1 rounded-md text-gray-100 tracking-wider hover:animate-bounce text-xl"
              type='submit'
            >
              <svg
                class="w-5 h-5 inline-block"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            {/* </a> */}
          {/* </span> */}
          <br className='sm:block hidden' /> 
        </p>
        <span className='text-gray-500 dark:text-gray-400'>"Empowering Ideas with Full Stack Brilliance: Crafting Digital Solutions from Front to Back."</span><br className='sm:block hidden' />
      </div>
      
    </div>

    <ComputersCanvas />

    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  </section>
  )
}

export default Hero