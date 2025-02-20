import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';
import { katikaservices } from '../../constants';
import './highlight.css';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Animation du titre
    gsap.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 50,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset"
        }
      }
    );

    // Animation des cartes
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "restart none none reset"
          }
        }
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 opacity-0 relative"
          >
            <span className="relative inline-block">
              L'EXPERIENCE LUDOKIN
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {katikaservices.map((item, index) => (
            <div
              key={item.id}
              ref={el => cardsRef.current[index] = el}
              className="relative h-[350px] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 opacity-0"
            >
              {/* Fond avec effet parallaxe */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{
                  backgroundImage: `url(${item.background})`
                }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Contenu */}
              <div className="relative h-full flex flex-col justify-center items-center p-6 group">
                <div className="backdrop-blur-sm bg-white/30 p-6 rounded-lg border border-purple-300/30 transform transition-all duration-300 group-hover:scale-105">
                  <p className="text-lg font-bold text-purple-900 group-hover:text-white transition-colors duration-300 mb-4">
                    {item.text}
                  </p>
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-20 h-20 mx-auto transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Décoration background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
    </section>
  );
};

export default Highlights;