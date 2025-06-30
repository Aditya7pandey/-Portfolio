import React from "react";
import LazyFadeIn from "../LazyFadeIn/LazyFadeIn";

function Header() {
  return (
    <LazyFadeIn delay={0.5}>
      <header className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6 gap-4">
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Hi, I'm Aditya 👋
              </h1>
              <p className="text-xl text-gray-600">
                Web Developer. I love building things and helping people. Very active on Twitter.
              </p>
            </div>
            <div className="rounded-full overflow-auto">
              <img src="src/assets/profile_image.jpeg" />
            </div>
          </div>
        </div>
      </header>
    </LazyFadeIn>
    
    
  );
}

export default Header;
