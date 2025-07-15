import React from 'react';
import { Server, Code, Cloud, Shield } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: Server,
      title: "Infrastructure Automation",
      description: "Expert in Terraform and Ansible for scalable infrastructure",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Code,
      title: "CI/CD Pipelines",
      description: "Building robust deployment workflows with Jenkins and GitHub Actions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Kubernetes orchestration and AWS cloud architecture",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Implementing comprehensive monitoring and security practices",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 relative ${
      darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-blue-400 to-purple-400 text-transparent bg-clip-text' 
              : 'from-blue-600 to-purple-600 text-transparent bg-clip-text'
          }`}>
            About Me
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I enjoy solving complex infrastructure problems and helping teams ship faster. 
            My experience spans end-to-end DevOps workflows including GitOps practices, 
            Docker-based development environments, and automated multi-environment deployments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:rotate-1 ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-blue-500/25' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/25'
            }`}>
              <div className={`inline-flex p-3 rounded-lg mb-4 bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                <item.icon size={24} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {item.title}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-xl ${
          darkMode 
            ? 'bg-gray-900 border border-gray-700' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h3 className={`text-2xl font-semibold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`text-lg font-medium mb-2 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                DevOps Workflows
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Worked on end-to-end DevOps workflows including GitOps practices, 
                ensuring smooth deployment processes and infrastructure management.
              </p>
            </div>
            <div>
              <h4 className={`text-lg font-medium mb-2 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Development Environments
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Built Docker-based development environments and automated multi-environment 
                deployments for improved developer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;