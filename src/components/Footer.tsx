import React from 'react';
import { Heart, Code } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${
      darkMode 
        ? 'from-gray-800 via-gray-900 to-gray-800 border-t border-gray-700' 
        : 'from-gray-50 via-white to-gray-50 border-t border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
              <Code size={20} />
            </div>
            <span className={`text-lg font-semibold bg-gradient-to-r ${
              darkMode 
                ? 'from-blue-400 to-purple-400 text-transparent bg-clip-text' 
                : 'from-blue-600 to-purple-600 text-transparent bg-clip-text'
            }`}>
              Amira Abbas
            </span>
          </div>
          
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            DevOps Engineer | Infrastructure Automation | Cloud Architecture
          </p>
          
          <div className="flex items-center justify-center gap-2">
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Built with
            </span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              using React & TypeScript
            </span>
          </div>
          
          <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2025 Amira Abbas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;