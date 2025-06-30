import React from 'react'
import LazyFadeIn from '../LazyFadeIn/LazyFadeIn'
function About() {
  return (
    <LazyFadeIn delay={0.8}>
      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a Web developer, I focus on creating robust and dynamic solutions that improve lead generation and enhance user experience. My passion for clean code and innovative design drives me to deliver seamless digital experiences that stand out.
          </p>
        </div>
      </section>
    </LazyFadeIn>
  )
}

export default About