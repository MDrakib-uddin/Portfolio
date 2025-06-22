import React, { useRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const experiences = [
    {
      id: 1,
      role: 'Senior Machine Learning Engineer',
      company: 'TechVision AI',
      period: '2022 - Present',
      description: 'Leading the development of computer vision solutions for autonomous vehicles. Implemented state-of-the-art object detection and tracking algorithms.',
      icon: Briefcase,
    },
    {
      id: 2,
      role: 'Machine Learning Engineer',
      company: 'DataInnovate',
      period: '2019 - 2022',
      description: 'Designed and developed NLP models for sentiment analysis and text classification. Improved model accuracy by 23% using transformer architectures.',
      icon: Briefcase,
    },
    {
      id: 3,
      role: 'Data Scientist',
      company: 'GlobalTech',
      period: '2017 - 2019',
      description: 'Created predictive models for customer behavior analysis. Built data pipelines and visualization dashboards for business insights.',
      icon: Briefcase,
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'M.S. in Computer Science, AI Specialization',
      institution: 'Stanford University',
      period: '2015 - 2017',
      description: 'Focused on machine learning, deep learning, and computer vision. Research in reinforcement learning algorithms.',
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: 'B.Sc in Computer Science & Engineering',
      institution: 'CoxsBazar International University',
      period: '2023 - 2027',
      description: 'Graduated with honors. Coursework in algorithms, data structures, and artificial intelligence fundamentals.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-blue-600 dark:text-blue-400">Me</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A passionate machine learning enthusiast with experience in developing intelligent systems that solve real-world problems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 text-center">
              <Calendar size={32} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">5+ Years</h3>
              <p className="text-gray-700 dark:text-gray-300">Professional Experience</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 text-center">
              <Briefcase size={32} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">20+ Projects</h3>
              <p className="text-gray-700 dark:text-gray-300">Successfully Delivered</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 text-center">
              <MapPin size={32} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">San Francisco</h3>
              <p className="text-gray-700 dark:text-gray-300">Current Location</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative pl-8 transition-all duration-500 transform ${
                      isInView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute left-2 top-5 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    <div className="pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">
                        <span>{item.company}</span>
                        <span className="mx-2">•</span>
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative pl-8 transition-all duration-500 transform ${
                      isInView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${(index + experiences.length) * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
                    {index < education.length - 1 && (
                      <div className="absolute left-2 top-5 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    <div className="pb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1 mb-2">
                        <span>{item.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{item.period}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;