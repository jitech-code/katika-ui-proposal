import React from 'react';
import { Ksec } from '../../constants';

const Ksection = () => {
  return (
    <section className="relative min-h-screen md:h-[735px] w-full overflow-hidden bg-gradient-to-br from-violet-900 via-violet-400 to-pink-300">
      {/* Background Design Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/20 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto h-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 lg:px-8 py-12 md:py-0">
          
          {/* Text Content Section */}
          <div className="w-full md:w-1/2 space-y-8 md:pr-8 lg:pr-16 text-center md:text-left 
                        transform transition-all duration-500 hover:scale-105">
            <div className="space-y-4 max-w-xl mx-auto md:mx-0">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white 
                           tracking-tight leading-tight">
                Découvrez{' '}
                <span className="text-gray-800 relative">
                  Katika Wallet
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-violet-900/20 transform 
                               skew-x-12"></div>
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed
                          max-w-lg">
                Lancé pour offrir aux gamers une chance de posséder des actifs et des richesses 
                de valeur dans le jeu
              </p>
            </div>

            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white 
                           bg-violet-900 rounded-full shadow-lg hover:bg-purple-800 
                           transform hover:scale-105 transition-all duration-300
                           hover:shadow-xl hover:shadow-violet-900/20
                           focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
              <span>En savoir plus</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0
                        transform transition-all duration-500 hover:scale-105">
            <div className="relative w-full max-w-lg xl:max-w-xl">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-pink-300/20 
                           blur-3xl rounded-full transform -rotate-6"></div>
              
              <img 
                src="/assets/scale.svg" 
                alt="Katika Wallet Illustration" 
                className="relative w-full h-auto object-contain
                         drop-shadow-2xl transform transition-transform duration-500"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 
                    bg-gradient-to-t from-violet-900/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 
                    bg-gradient-to-bl from-pink-300/20 to-transparent 
                    rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Ksection;