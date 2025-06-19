import React, { useRef } from 'react';
import { skills } from '../../data/skills';
import { useInView } from '../../hooks/useInView';

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const mlSkills = skills.filter(skill => skill.category === 'ML/AI');
  const programmingSkills = skills.filter(skill => skill.category === 'Programming');
  const dataSkills = skills.filter(skill => skill.category === 'Data');
  const toolsSkills = skills.filter(skill => skill.category === 'Tools');

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise in machine learning, programming, and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ML/AI Skills */}
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Machine Learning & AI</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {mlSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Skills */}
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Programming</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {programmingSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Science Skills */}
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Data Science</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {dataSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Tools & Frameworks</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {toolsSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;