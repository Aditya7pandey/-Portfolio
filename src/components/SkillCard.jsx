import React from "react";
import { useSelector } from "react-redux";

function SkillCard({skills}) {

  const isToggled = useSelector((state)=>state.toggle.isToggled)

  return (
    skills.map((skill,index)=>(
        <div
        style={isToggled?{color:"white",backgroundColor:"#171717"}:{color:"black"}}
      key={index}
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
    >
      <span className="font-medium">{skill}</span>
    </div>
    ))
    
  );
}

export default SkillCard;
