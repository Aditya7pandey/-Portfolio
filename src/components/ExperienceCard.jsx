import React from "react";

function ExperienceCard({emote,companyName,monthYear,present,position,description}) {
  return (
    <div className="border-l-2 group sm:border-blue-500 borde-gray-500 pl-6 transition-colors duration-500 ease-in-out">
      <div className="flex items-center space-x-3 mb-2">
        <div className="transition-colors duration-600 ease-in-out w-8 h-8 group-hover:bg-blue-500 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {emote}
        </div>
        <h3 className="text-xl font-semibold">{companyName}</h3>
      </div>
      <div className="text-gray-600 mb-2">{monthYear} - {present}</div>
      <h4 className="font-medium mb-2">{position}</h4>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
}

export default ExperienceCard;
