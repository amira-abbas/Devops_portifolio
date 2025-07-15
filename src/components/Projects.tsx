import React from 'react';
import { GitBranch, Container, Cloud, BarChart3, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      icon: GitBranch,
      title: "CI/CD Pipeline for Laravel App",
      description: "Built a comprehensive Jenkins pipeline using Docker to automate testing and deployment of a Laravel application. Implemented automated testing, code quality checks, and multi-environment deployments with zero-downtime rollbacks.",
      technologies: ["Jenkins", "Docker", "Laravel", "Git", "Bash"],
      color: "from-blue-400 to-blue-600",
      category: "CI/CD"
    },
    {
      icon: Container,
      title: "Kubernetes Cluster Deployment",
      description: "Set up and deployed a production-ready Kubernetes cluster using Terraform and Helm. Implemented auto-scaling, service mesh, and comprehensive monitoring for high-availability applications.",
      technologies: ["Kubernetes", "Terraform", "Helm", "Docker", "AWS"],
      color: "from-purple-400 to-purple-600",
      category: "Orchestration"
    },
    {
      icon: Cloud,
      title: "Automated AWS Infrastructure",
      description: "Used Ansible and Terraform to provision complete AWS infrastructure including EC2, RDS, and networking components for a scalable web application. Implemented Infrastructure as Code best practices with version control.",
      technologies: ["AWS", "Terraform", "Ansible", "EC2", "RDS", "VPC"],
      color: "from-orange-400 to-orange-600",
      category: "Cloud Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Monitoring & Alerting Stack",
      description: "Configured a comprehensive monitoring solution using Prometheus and Grafana for real-time metrics collection and visualization. Set up alerting rules and dashboards for proactive system monitoring.",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Node Exporter", "Docker"],
      color: "from-red-400 to-red-600",
      category: "Monitoring"
    }
  ];

  return (
    <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 relative ${
      darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-40 left-20 w-40 h-40 rounded-full opacity-5 ${
          darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-600' : 'bg-gradient-to-r from-purple-300 to-pink-400'
        }`}></div>
        <div className={`absolute bottom-40 right-20 w-32 h-32 rounded-full opacity-5 ${
          darkMode ? 'bg-gradient-to-r from-blue-400 to-green-600' : 'bg-gradient-to-r from-blue-300 to-green-400'
        }`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-purple-400 to-pink-400 text-transparent bg-clip-text' 
              : 'from-purple-600 to-pink-600 text-transparent bg-clip-text'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of real-world DevOps implementations, demonstrating expertise in 
            automation, orchestration, and cloud infrastructure management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`relative p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:rotate-1 ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-2xl' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl'
            }`}>
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                  <project.icon size={24} />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
                  darkMode 
                    ? 'from-gray-800 to-gray-700 text-gray-300' 
                    : 'from-gray-100 to-gray-200 text-gray-700'
                }`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className={`text-2xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              
              <p className={`text-base leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 bg-gradient-to-r ${
                      darkMode 
                        ? 'from-gray-700 to-gray-600 text-gray-300 shadow-md' 
                        : 'from-gray-100 to-gray-200 text-gray-700 shadow-sm'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <button className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r ${
                  darkMode 
                    ? 'from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                    : 'from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}>
                  <ExternalLink size={16} />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-xl text-center ${
          darkMode 
            ? 'bg-gray-900 border border-gray-700' 
            : 'bg-white border border-gray-200 shadow-sm'
        }`}>
          <h3 className={`text-2xl font-semibold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Additional Experience
          </h3>
          <p className={`text-lg max-w-4xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Beyond these featured projects, I have extensive experience integrating logging and 
            monitoring solutions for better observability, implementing GitOps workflows, and 
            building secure, scalable infrastructure across multiple cloud providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;