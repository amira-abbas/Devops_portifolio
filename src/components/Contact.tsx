import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amiraabbas19@gmail.com",
      link: "mailto:amiraabbas19@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/amira-abbas",
      link: "https://github.com/amira-abbas"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/amira-abbas",
      link: "https://www.linkedin.com/in/amira-abbas-a0b362326"
    }
  ];

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 relative ${
      darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-20 w-28 h-28 rounded-full opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-green-400 to-blue-600' : 'bg-gradient-to-r from-green-300 to-blue-400'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-36 h-36 rounded-full opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-600' : 'bg-gradient-to-r from-purple-300 to-pink-400'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-green-400 to-blue-400 text-transparent bg-clip-text' 
              : 'from-green-600 to-blue-600 text-transparent bg-clip-text'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always interested in discussing new opportunities, innovative projects, 
            or collaborating on DevOps challenges. Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:rotate-1 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white shadow-lg hover:shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-gray-900 shadow-sm hover:shadow-lg hover:shadow-blue-500/25'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${
                    index === 0 ? 'from-red-500 to-pink-600' :
                    index === 1 ? 'from-gray-700 to-gray-900' :
                    'from-blue-500 to-blue-700'
                  } text-white shadow-lg`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.label}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Collaborate
            </h3>
            <div className={`p-6 rounded-xl bg-gradient-to-br ${
              darkMode 
                ? 'from-gray-800 to-gray-900 border border-gray-700 shadow-lg' 
                : 'from-gray-50 to-white border border-gray-200 shadow-sm'
            } transition-all duration-300 hover:shadow-xl`}>
              <p className={`text-base leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm passionate about helping organizations streamline their development and deployment 
                processes. Whether you're looking to implement CI/CD pipelines, migrate to cloud 
                infrastructure, or optimize your current DevOps workflows, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg"></div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Available for freelance projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 shadow-lg"></div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Open to full-time opportunities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg"></div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Interested in consulting engagements
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;