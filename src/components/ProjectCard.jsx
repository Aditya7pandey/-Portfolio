import React from "react";
import { useSelector } from "react-redux";

function ProjectCard({skills,projectLink,githubLink,projectName,description}) {
  const isToggled = useSelector((state)=>state.toggle.isToggled)

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
      style={isToggled?{backgroundColor:"#171717",color:"white"}:{backgroundColor:"white",color:"black"}}
    >
      <h3 className="text-2xl font-bold mb-3">{projectName}</h3>
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a href={projectLink} className="text-blue-600 hover:text-blue-800 font-medium">
          View Project
        </a>
        <a href={githubLink} className="text-gray-600 hover:text-gray-800 font-medium">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
