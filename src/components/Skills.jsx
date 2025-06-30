import React from 'react'
import SkillCard from './SkillCard'
import { useSelector } from 'react-redux'
import LazyFadeIn from '../LazyFadeIn/LazyFadeIn'

function Skills() {
    const isToggled = useSelector((state)=>state.toggle.isToggled)

    const skills =['Java','JavaScript', 'React','HTML','CSS', 'Tailwind CSS',
              ,'Redux', 'Shadcn UI','C','C++' ,'Node.js', 'Express.js','MongoDB', 'SQL', 'Python']
  return (
    <LazyFadeIn delay={0.5}>
      <section className="py-16 px-6 bg-gray-50"
        style={isToggled?{backgroundColor:"#171717",color:"white"}:{backgroundColor:"white",color:"black"}} 
    >   
      <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillCard skills={skills} />
          </div>
        </div>
        
      </section>
    </LazyFadeIn>
  )
}

export default Skills