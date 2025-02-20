import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const teamMembers = [
    {
      name: 'Ricardo Konlack',
      role: 'Directeur Général',
      image: 'assets/ricardo.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dimi Selatsta ',
      role: 'Directeur technique',
      image: 'assets/selasta.jpeg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ngislain Lanore',
      role: 'Directeur financier',
      image: 'assets/ghislain-squart.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Ezekiel Lonko',
      role: 'Co-fondateur',
      image: 'assets/ezekiel-sqrt.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient bg-gray-100 from-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-20">
          <h1 className="text-purple-900 text-5xl font-bold py-6">
            Les valeurs que nous partageons
          </h1>
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center max-w-sm">
              <h2 className="text-purple-900 text-2xl font-semibold mb-3">Innovation</h2>
              <p className="text-gray-600">Notre engagement envers l'innovation nous pousse à repousser constamment les limites.</p>
            </div>
            <div className="text-center max-w-sm">
              <h2 className="text-purple-900 text-2xl font-semibold mb-3">Excellence</h2>
              <p className="text-gray-600">Nous visons l'excellence dans chaque aspect de notre travail.</p>
            </div>
            <div className="text-center max-w-sm">
              <h2 className="text-purple-900 text-2xl font-semibold mb-3">Intégrité</h2>
              <p className="text-gray-600">L'intégrité est au cœur de toutes nos actions et décisions.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <h1 className="text-purple-900 text-5xl font-bold py-6 text-center mb-8">
            Notre Équipe
          </h1>
          
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {teamMembers.map((member, index) => (
                <div key={index} className="min-w-[33.33%] px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-purple-900 font-semibold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{member.role}</p>
                    <div className="flex justify-center space-x-4">
                      <a href={member.linkedin} className="text-gray-400 hover:text-purple-700 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.twitter} className="text-gray-400 hover:text-purple-700 transition-colors">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-purple-900 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;