import React, { useRef, useState } from 'react';
import { skills } from '../../data/skills';
import { useInView } from '../../hooks/useInView';

const categories = [
  { key: 'ML/AI', label: 'ML/AI' },
  { key: 'Programming', label: 'Programming' },
  { key: 'Data', label: 'Data' },
  { key: 'Tools', label: 'Tools' },
];

const MAX_LEVEL = 5;

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('ML/AI');

  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-500 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise in machine learning, programming, and data science.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2 rounded-full font-medium transition-colors border text-sm
                  ${activeTab === cat.key
                    ? 'bg-blue-600 text-white border-blue-600 shadow'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30'}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="fade-up">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="flex flex-col items-center bg-gray-50 dark:bg-gray-800/30 rounded-xl p-5 shadow hover:shadow-lg transition group"
                >
                  {/* Animated Icon */}
                  <span className="mb-2">
                    <Icon className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-skillicon group-hover:scale-110 transition-transform" />
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white mb-1 text-center">{skill.name}</span>
                  {/* Proficiency Bar */}
                  <div className="w-full mt-2 flex flex-col items-center">
                    {/* Star Rating */}
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: MAX_LEVEL }).map((_, i) => (
                        <span key={i} className={
                          i < skill.level
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-gray-700'
                        }>
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Progress Bar (optional, can comment out if only stars needed) */}
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-blue-500 dark:bg-blue-400 transition-all"
                        style={{ width: `${(skill.level / MAX_LEVEL) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;