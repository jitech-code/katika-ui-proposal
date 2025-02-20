import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] w-full overflow-hidden"
      style={{
        background: 'linear-gradient(104.41deg, #bc08f8 -111.55%, #0e0e2c 100%)',
        backgroundSize: '200% 200%'
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[8px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Contenu texte */}
          <div className="space-y-8">
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              DECOUVREZ Katika
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 ml-2">
                Wallet
              </span>
            </h1>
            
            <p 
              ref={textRef}
              className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni 
              non nobis nemo iusto laboriosam dolor.
            </p>
            
            <button
              ref={buttonRef}
              className="inline-flex items-center px-8 py-4 rounded-full bg-purple-600 text-white font-semibold transform transition-all duration-200 hover:bg-purple-700 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900"
            >
              En savoir plus
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>

          {/* Zone image */}
          <div 
            ref={imageRef}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Placeholder pour le défilement d'images */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative space-y-4">
                <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl">
                  <p className="text-white text-lg font-medium">
                    Défilement d'image... et Texte à Droite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;