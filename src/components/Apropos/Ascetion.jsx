import React from 'react'

const Ascetion = () => {
    return (
      <section className="relative h-300 md:h-[735px] w-full overflow-hidden bg-gradient-to-br from-violet-900 via-violet-400 to-pink-300">
        {/* Background Design Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/20 to-transparent"></div>
        </div>
  
        {/* Main Content Container */}
        <div className="relative container mx-auto h-full">
          <div className="flex flex-col-reverse md:flex-row items-center  h-full px-16 lg:px-16 py-12 md:py-0">
            
            {/* Text Content Section */}
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left 
                          transform transition-all duration-500 hover:scale-105">
              <div className="space-y-4 max-w-xl mx-auto md:mx-0">
                <h2 className="text-3xl sm:text-2xl lg:text-4xl  font-bold text-white 
                             tracking-tight leading-tight">
                Nous sommes un pôle pour la blockchain en Afrique
                </h2>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium leading-relaxed
                            max-w-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, recusandae expedita iusto minima, voluptatem sunt fuga ratione facere, atque excepturi facilis.
                </p>
              </div>
  
            
            </div>
  
            {/* Image Section */}
            <div className="w-180 md:w-1/2 flex justify-center items-center p-6 md:p-0
                          transform transition-all duration-500 hover:scale-105">
              <div className="relative w-full max-w-lg xl:max-w-xl">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-pink-300/20 
                             blur-3xl rounded-full transform -rotate-6"></div>
                
                <img 
                  src="/assets/blockchain.webp" 
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
export default Ascetion
