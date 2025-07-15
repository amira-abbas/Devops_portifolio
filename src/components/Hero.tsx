import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 ${
          darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 'bg-gradient-to-r from-blue-200 to-purple-300'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 ${
          darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-600' : 'bg-gradient-to-r from-purple-200 to-pink-300'
        }`}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 shadow-2xl ${
              darkMode ? 'border-gradient-to-r from-blue-400 to-purple-500 shadow-blue-500/25' : 'border-gradient-to-r from-blue-500 to-purple-600 shadow-blue-500/25'
            }`} style={{
              borderImage: darkMode 
                ? 'linear-gradient(45deg, #60A5FA, #A855F7) 1' 
                : 'linear-gradient(45deg, #3B82F6, #9333EA) 1'
            }}>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Amira Abbas - DevOps Engineer" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 border-4 ${
              darkMode ? 'border-gray-900' : 'border-white'
            } shadow-lg`}>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-white via-blue-100 to-purple-200 text-transparent bg-clip-text' 
              : 'from-gray-900 via-blue-800 to-purple-800 text-transparent bg-clip-text'
          }`}>
            Amira Abbas
          </h1>
          <p className={`text-xl sm:text-2xl md:text-3xl font-light mb-6 bg-gradient-to-r ${
            darkMode 
              ? 'from-blue-400 to-purple-400 text-transparent bg-clip-text' 
              : 'from-blue-600 to-purple-600 text-transparent bg-clip-text'
          }`}>
            DevOps Engineer
          </p>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm a passionate DevOps Engineer with hands-on experience in infrastructure automation, 
            CI/CD pipelines, container orchestration, and cloud-native tools. I focus on delivering 
            scalable, secure, and reliable systems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Learn More
            <ChevronDown size={20} />
          </button>
          <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600' 
              : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300'
          }`}>
            <Download size={20} />
            Download Resume
          </button>
        </div>
        
        <div className="animate-bounce">
          <button
            onClick={scrollToAbout}
            className={`p-2 rounded-full transition-colors ${
              darkMode 
                ? 'text-gray-400 hover:text-gray-300' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;