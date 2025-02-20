import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const text = useRef(null);
  const tet = useRef(null);
  const carouselRef = useRef(null);

  // Enhanced GSAP animations
  useGSAP(() => {
    // Carousel animation
    gsap.to(".carousel-item", {
      x: "-100%",
      duration: 15,
      ease: "none",
      repeat: -1,
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top bottom",
        toggleActions: "play pause resume reset",
      },
    });

    // Fade in animations for sections
    gsap.utils.toArray('.fade').forEach((section, i) => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Separator animations
    gsap.utils.toArray('.separator').forEach((separator) => {
      gsap.fromTo(separator,
        { width: "0%" },
        {
          width: "100%",
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: separator,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  // Custom Separator Component
  const Separator = () => (
    <div className="w-full flex items-center justify-center py-20">
      <div className="separator w-full max-w-4xl mx-auto h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </div>
  );

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* POUR LES GAMERS */}
      <div className=" py-10">
      
        <h1 ref={textRef} className="fade relative text-purple-500 font-extrabold text-5xl md:text-5xl max-sm:text-3xl  text-center tracking-tight">
          POUR LES GAMERS
        </h1>
      </div>

      {/* Gamers Section */}
      <div className="container mx-auto px-20 spaxe-y-10 ">
        {/* Actifs de valeur */}
        <div className="fade-in-section flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 space-y-2">
            <h4 className="text-purple-500 text-2xl lg:text-3xl font-bold tracking-tight">
              Actifs de valeur
            </h4>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam
            </p>
          </div>
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <img src="assets/graph.svg" alt="" className="w-full max-w-120 mx-auto drop-shadow-xl"/>
          </div>
        </div>

        <Separator />

        {/* Utiliser les memes actifs */}
        <div className="fade-in-section flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <img src="assets/screens.svg" alt="" className="w-full max-w-xl mx-auto drop-shadow-xl"/>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-purple-500 text-2xl lg:text-3xl  font-bold tracking-tight">
              Utiliser les memes actifs dans tous les jeux
            </h4>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam
            </p>
          </div>
        </div>

        <Separator />

        {/* Contrôle total */}
        <div className="fade-in-section flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-purple-500 text-2xl lg:text-3xl  font-bold tracking-tight">
              Contrôle total de vos transactions
            </h4>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam
            </p>
          </div>
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <img src="assets/safe.svg" alt="" className="w-full max-w-120 mx-auto drop-shadow-xl"/>
          </div>
        </div>

        <Separator />

        {/* Newsletter Block */}
        <div className="fade-in-section bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img src="https://i.imgur.com/Dh7U4bp.png" alt="" className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-800 text-xl lg:text-2xl font-medium leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Entrez votre adresse e-mail"
                  className="flex-1 p-4 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                />
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                  Rejoindre
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* POUR LES DEVELOPPEURS */}
      <div className="py-10">

        <h1 ref={text} className=" fade relative text-purple-500 font-extrabold text-5xl md:text-5xl max-sm:text-3xl  text-center tracking-tight">
          POUR LES DEVELOPPEURS
        </h1>
      </div>

      {/* Developers Section */}
      <div className="container mx-auto px-20 space-y-10">
        {/* SDK Block */}
        <div className=" flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-purple-500 text-2xl lg:text-3xl font-bold tracking-tight">
              Obtention de SDK
            </h4>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            </p>
          </div>
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <img src="assets/laptop.svg" alt="" className="w-full max-w-120 mx-auto drop-shadow-xl"/>
          </div>
        </div>

        <Separator />

        {/* Blockchain Block */}
        <div className="fade-in-section flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-500">
            <img src="assets/blockchain.svg" alt="" className="w-full max-w-120 mx-auto drop-shadow-xl"/>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-purple-500 text-2xl lg:text-3xl font-bold tracking-tight">
              Integrer la technologie blockchain
            </h4>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam
            </p>
          </div>
        </div>

        <Separator />

        {/* Lifetime Revenue Block */}
        <div className="fade-in-section flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <h4 className="text-purple-500 text-2xl lg:text-3xl font-bold tracking-tight">
              Des revenus à vie sur votre Art
            </h4>
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam
            </p>
          </div>
          <div className="w-full md:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <img src="assets/lifetime.svg" alt="" className="w-full max-w-120 mx-auto drop-shadow-xl"/>
          </div>
        </div>

        <Separator />

        {/* Developer CTA Block */}
        <div className="fade-in-section bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <img src="https://i.imgur.com/Dh7U4bp.png" alt="" className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-500"/>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-gray-800 text-xl lg:text-2xl font-medium leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
              </p>
              <button className="bg-violet-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                Developper avec Katika
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="relative py-20 bg-gradient-to-b from-white to-gray-50 mt-32">
        <h1 className="text-purple-500 font-extrabold text-4xl md:text-5xl lg:text-6xl text-center tracking-tight mb-16">
          Cas d'études
        </h1>

        <div className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20"></div>
          <video
            src="assets/video/v.mp4"
            type="video/mp4"
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <div ref={carouselRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden px-5">
            <div className="flex gap-12 whitespace-nowrap">
              {[
                { icon: "assets/control.svg", text: "Contrôle total" },
                { icon: "assets/game-currency.svg", text: "Monnaie virtuelle" },
                { icon: "assets/control.svg", text: "Nouvelle mécanique" }
              ].map((item, index) => (
                <div key={index} className="carousel-item min-w-[300px] text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                    <img src={item.icon} alt={item.text} className="w-32 h-32 mx-auto drop-shadow-lg" />
                    <p className="text-white font-medium text-xl mt-4 drop-shadow-md">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer gradient */}
      <div className="h-5 bg-gradient-to-b from-gray-50 to-white"></div>
    </section>
  );
};

export default Hero;
