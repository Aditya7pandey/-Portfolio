import React from "react";
import ExperienceCard from "./ExperienceCard";
import { useState } from "react";
import LazyFadeIn from "../LazyFadeIn/LazyFadeIn";

function WorkExperience() {

  return (
    <LazyFadeIn delay={0.5}>
      <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          <LazyFadeIn delay={0.5}>
            <ExperienceCard 
            emote={"U"}
            companyName={"Utkarsh 1.0 Hackathon"}
            description={"Created whole frontend and contributed in backend of the application"}
            monthYear={"April 2025"}
            present={"April 2025"}
            position={"software developer"}
          />
          </LazyFadeIn>
          
          <LazyFadeIn delay={0.5}>
            <ExperienceCard 
            emote={"B"}
            companyName={"Birla Tech Exchibition"}
            description={"Contributed to frontend utilizing React,Material-UI, and Redux"}
            monthYear={"March 2025"}
            present={"March 2025"}
            position={"Frontend developer"}
          />
          </LazyFadeIn>
          
        </div>
      </div>
    </section>
    </LazyFadeIn>
  );
}

export default WorkExperience;
