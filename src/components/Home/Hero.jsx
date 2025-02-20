import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: -100, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      { y: -50, opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=1"
    )
    .fromTo(
      ctaRef.current,
      { y: -10, opacity: 0 },
      { y: 200, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );
  }, []);

  return (
    <section ref={heroRef} className="relative h-[800px] w-screen flex items-center justify-center bg-purple-900 shadow-lg">
      {/* Video en fond */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0 " autoPlay muted loop playsInline>
        <source src={`${import.meta.env.BASE_URL}assets/video/vi.mp4`} type="video/mp4" />
      </video>

      {/* Contenu au-dessus de la vidéo */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 ref={titleRef} className="text-4xl sm:text-3xl md:text-3xl font-bold ">Welcome to Katika</h1>
        <p ref={textRef} className="mt-4 text-lg font-semibold md:text-xl max-w-6xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam dolor.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam dolor.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam dolor.
         
        </p>

        {/* Bouton More animé */}
        <div ref={ctaRef} className="opacity-0   ">
          <a
            href="#highlights"
            className=" px-6 py-3 text-lg font-semibold  bg-white text-purple-900 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-200"
          >
            More
          </a>
          <p className=" text-center py-10 font-normal text-xl">Web3 | Iot | CryptoCurrency$</p>
        </div>
      </div>

      {/* Overlay pour améliorer la visibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Ombre sous la vidéo */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
}

export default Hero;
