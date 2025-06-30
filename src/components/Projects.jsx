import React from "react";
import ProjectCard from "./ProjectCard";
import { useSelector } from "react-redux";
import LazyFadeIn from "../LazyFadeIn/LazyFadeIn";

function Projects() {
  const isToggled = useSelector((state)=>state.toggle.isToggled)

  return (
    <LazyFadeIn delay={0.5}>
      <section id="projects" className="py-16 px-6 bg-gray-50"
      style={isToggled?{backgroundColor:"#171717",color:"white"}:{backgroundColor:"white",color:"black"}}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-600 mb-8">Check out my latest work</p>
        <p className="text-gray-700 mb-8">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <LazyFadeIn delay={0.5}>
            <ProjectCard
            skills={[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Socket.IO",
              "JWT"
            ]}
            projectLink={"https://github.com/Aditya7pandey/Gchat"}
            projectName={"Gchat"}
            githubLink={"https://github.com/Aditya7pandey/Gchat"}
            description={"GChat is a real-time group chatting application designed to provide an interactive and fast messaging experience."}
          />
          </LazyFadeIn>
          

          <LazyFadeIn delay={0.5}>
            <ProjectCard 
          skills={[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
            ]}
            projectLink={"https://job-finder-analysis.vercel.app/"}
            projectName={"JobFinder-Analysis"}
            githubLink={"https://github.com/Aditya7pandey/JobFinder-Analysis"}
            description={"JobFinder-Analysis is a Frontend Application that focuses on clean UI & UX which fetches the information regarding jobs and companies through the role entered by the user."}
          />
          </LazyFadeIn>
          

          <LazyFadeIn delay={0.5}>
            <ProjectCard 
          skills={[
              "React.js",
              "JavaScript",
              "Tailwind CSS",
            ]}
            projectLink={"https://pokieedexx.netlify.app/"}
            projectName={"Pokedex"}
            githubLink={"https://github.com/Aditya7pandey/pokedex"}
            description={"Pokedex is a frontend application which fetches information regarding pokemon type, attacks and name."}
          />
          </LazyFadeIn>
          

          {/* <LazyFadeIn delay={0.5}>
            <ProjectCard 
          skills={[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Tanstack Query",
              "OpenAI",
            ]}
            projectLink={"#"}
            projectName={"Project"}
            githubLink={"#"}
            description={"Built an AI-powered application that lets you explore and interact with modern web technologies using natural language."}
          />
          </LazyFadeIn> */}
          
        </div>
      </div>
    </section>
    </LazyFadeIn>
    
  );
}

export default Projects;
