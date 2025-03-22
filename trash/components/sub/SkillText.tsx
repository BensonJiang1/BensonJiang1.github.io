'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9]'>
              <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
              <h1 className='Welcome-text text-[13px]'>My Tech Stack</h1>

      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.8)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Technologies, Frameworks, and Languages
          </span>
          

      </motion.div>
    </div>
  )
}

export default SkillText