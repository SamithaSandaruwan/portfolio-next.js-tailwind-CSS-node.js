import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
   <section id='skills' className='flex-col flexCenter overflow-hidden bg-no-repeat bg-center bg-feature py-200'>

    <div className='max-container padding-container relative w-full justify-end flex'>

      <div className='flex flex-1'>
        <Image
         src="/skiils.png"
         alt='tech_guy'
         width={375}
         height={500}
         className='feature-img '
        
        />
      </div>

      <div className='z-20 flex w-full flex-col lg:w-[60%]'>
        <div className='relative'>
          <h2 className='bold-40 lg:bold-64'>
            My Skills
          </h2>
        </div>
        <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
        {FEATURES.map((feature) =>(
          <FeatureItem 
          key={feature.title}
          title= {feature.title}
          icon ={feature.icon}
          variant ={feature.variant}
          description ={feature.description}
          />
        ))}
      </ul>
      </div> 
    </div>
   </section>
  )
}

type FeatureItem={
  title : string;
  icon :string;
  variant:string;
  description :string;

}

const FeatureItem=({title,icon,variant,description}:FeatureItem)=>{
    return(
      <li className='flex w-full flex-1 flex-col items-start '>
        <div className='rounded-full p-4 lg:p-7'>
          <Image src={icon} alt='{title}' width={50} height={50}/>
        </div>
        <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
          {title}
        </h2>
        <p className='regular-16 mt-5 bg-white/80  text-gray-30 lg:mt-[30px] lg:bg-none'>
          {description}
        </p>
      </li>

    )
}
export default Skills