import React from 'react'
import LazyFadeIn from '../LazyFadeIn/LazyFadeIn'

function Contact() {
  return (
    <LazyFadeIn delay={0.5}>
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Want to chat? Just shoot me a dm with a direct question on{' '}
            <a href="https://twitter.com/Adi_insights" className="text-blue-600 hover:text-blue-800 underline">
              Twitter
            </a>{' '}
            and I'll respond whenever I can.
          </p>
        </div>
      </section>
    </LazyFadeIn>
    
  )
}

export default Contact