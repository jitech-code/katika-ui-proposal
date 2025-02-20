import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icônes pour le menu hamburger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-purple-900 font-bold text-2xl">LOGO</div>

        {/* Bouton Hamburger en Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Liens de navigation */}
        <ul className={`lg:flex gap-6 items-center absolute lg:static top-16 left-0 w-full bg-white lg:bg-transparent shadow-md lg:shadow-none transition-transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } lg:translate-y-0`}>
          <li className="text-purple-900 font-medium px-6 py-2 lg:px-0"><a href="#">Accueil</a></li>
          <li className="text-purple-900 font-medium px-6 py-2 lg:px-0"><a href="#">Contact</a></li>
          <li className="text-purple-900 font-medium px-6 py-2 lg:px-0"><a href="#">Blog</a></li>
        </ul>

        <section className="w-full h-[500px] bg-gradient-to-r from-purple-500 to-indigo-600 opacity-100 backdrop-blur-lg">
  <h2 className="text-white text-3xl font-bold text-center pt-20">Dégradé avec effet de flou</h2>
  <div className="relative flex justify-center items-center h-[400px] w-full">
  {/* Image en arrière-plan */}
  <img 
    src="/assets/g.png"  
    className="absolute left-[-50px] w-[500px] h-[900px] opacity-20 object-cover"
    alt="Game Asset" 
  />

  {/* Texte superposé */}
  <div className="relative text-center">
    <h4 className="text-purple-500 text-3xl font-bold">
      Actifs de valeur
    </h4>
    <p className="text-gray-900 font-normal max-w-lg mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt magni non nobis nemo iusto laboriosam dolor.
    </p>
  </div>
</div>

</section>
      </div>
    </nav>
  );
};

export default Navbar;
