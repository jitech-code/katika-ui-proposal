import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    { 
      icon: Phone, 
      text: '+237 2788787',
      label: 'Téléphone'
    },
    { 
      icon: Mail, 
      text: 'support@katika.io',
      label: 'Email'
    },
    { 
      icon: MapPin, 
      text: 'Akwa, Douala',
      label: 'Adresse'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-violet-500/20 to-pink-300/20 min-h-screen py-16">
      {/* En-tête */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">
          Nous contacter
        </h1>
        <p className="text-lg text-purple-900">
          N'hésitez pas à nous contacter et notre équipe d'expert répondra à toutes vos questions
        </p>
      </div>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row ">
          {/* Panneau d'information */}
          <div className="w-full md:w-2/5">
            <div className="relative h-full rounded-tl-3xl rounded-bl-3xl  p-8 overflow-hidden"   style={{
        background: 'linear-gradient(104.41deg, #bc08f8 -111.55%, #0e0e2c 100%)',
        backgroundSize: '200% 200%'
      }}
    >
              {/* Blobs animés */}
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              

              {/* Contenu */}
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-3xl font-extrabold text-white mb-4">
                    Information de contact
                  </h2>
                  <p className="text-gray-200">
                    Remplissez le formulaire et notre équipe vous répondra dans les 24 heures
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 text-white">
                      <div className="p-3 bg-white/10 rounded-full">
                        <info.icon size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-300">{info.label}</p>
                        <p className="font-medium">{info.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="w-full md:w-3/5">
            <div className="bg-white rounded-tr-3xl rounded-br-3xl p-8 shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                    placeholder="Votre message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-900 text-white py-3 px-6 rounded-lg font-medium
                           transform transition-all duration-200
                           hover:bg-purple-800 hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;