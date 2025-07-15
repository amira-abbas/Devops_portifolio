import React from 'react';
import { 
  Server, 
  GitBranch, 
  Container, 
  Cloud, 
  BarChart3, 
  Terminal,
  Code,
  Settings
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Settings,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: GitBranch,
      title: "CI/CD",
      skills: ["Jenkins", "GitHub Actions"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Container,
      title: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS (EC2, S3, RDS, IAM)"],
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: BarChart3,
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack"],
      color: "from-red-400 to-red-600"
    },
    {
      icon: Terminal,
      title: "System Administration",
      skills: ["Linux Systems", "Bash Scripting"],
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Code,
      title: "Development Tools",
      skills: ["Git", "Python"],
      color: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 relative ${
      darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-32 h-32 rounded-full opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-blue-400 to-purple-600' : 'bg-gradient-to-r from-blue-300 to-purple-400'
        }`}></div>
        <div className={`absolute bottom-20 left-10 w-24 h-24 rounded-full opacity-10 ${
          darkMode ? 'bg-gradient-to-r from-green-400 to-blue-600' : 'bg-gradient-to-r from-green-300 to-blue-400'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-green-400 to-blue-400 text-transparent bg-clip-text' 
              : 'from-green-600 to-blue-600 text-transparent bg-clip-text'
          }`}>
            Technical Skills
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive toolkit for modern DevOps practices, from infrastructure automation 
            to container orchestration and cloud-native solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className={`relative p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-rotate-1 ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl' 
                : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl'
            }`}>
              <div className={`inline-flex p-3 rounded-lg mb-4 bg-gradient-to-r ${category.color} text-white`}>
                <category.icon size={24} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 hover:from-gray-600 hover:to-gray-500 shadow-md' 
                        : 'bg-gradient-to-r from-white to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 border border-gray-200 shadow-sm'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-xl text-center ${
          darkMode 
            ? 'bg-blue-900/20 border border-blue-800' 
            : 'bg-blue-50 border border-blue-200'
        }`}>
          <h3 className={`text-2xl font-semibold mb-4 ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            Core Philosophy
          </h3>
          <p className={`text-lg max-w-4xl mx-auto ${
            darkMode ? 'text-blue-300' : 'text-blue-700'
          }`}>
            I believe in building resilient, scalable systems that enable teams to focus on 
            innovation rather than infrastructure. My approach combines automation, monitoring, 
            and security best practices to deliver reliable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;