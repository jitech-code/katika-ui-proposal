import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const sections = [
  {
    title: 'Logo entreprise',
    text: 'La mission de Katika est daméliorer la vie financière des gens grâce à la technologie blockchain.'
  },
  {
    title: 'LIENS UTILES',
    items: ['Accueil', 'À propos', 'Services', 'Contact']
  },
  {
    title: 'SERVICES',
    items: ['Consulting', 'Développement', 'Support', 'Formation']
  }
];

const socialIcons = [
  { id: 1, icon: FaFacebook, label: 'Facebook' },
  { id: 2, icon: FaTwitter, label: 'Twitter' },
  { id: 3, icon: FaInstagram, label: 'Instagram' },
  { id: 4, icon: FaLinkedin, label: 'LinkedIn' }
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simuler un délai d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h6 className="text-lg font-bold uppercase text-purple-950 tracking-wide">
                {section.title}
              </h6>
              {section.text && (
                <p className="text-gray-600 leading-relaxed">{section.text}</p>
              )}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-200 ease-in-out flex items-center group"
                      >
                        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="space-y-4">
            <h6 className="text-lg font-bold uppercase text-purple-950 tracking-wide">
              Newsletter
            </h6>
            <p className="text-gray-600 leading-relaxed">
              Inscrivez-vous à notre lettre d'information pour rester au courant de notre actualité.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre adresse e-mail"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-200 outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transform transition-all duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-wait' : 'hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? 'Inscription...' : 'Sinscrire'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Katika. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              {socialIcons.map(({ id, icon: Icon, label }) => (
                <a
                  key={id}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 hover:text-purple-600 transform hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;