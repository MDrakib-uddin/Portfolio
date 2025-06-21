import React, { useState, useEffect, useRef } from 'react';
import { Star, GitBranch } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const Github: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/MDrakib-uddin/repos?sort=stars&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch data from GitHub');
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My GitHub <span className="text-blue-600 dark:text-blue-400">Repositories</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my most popular projects on GitHub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <div
                key={repo.id}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 truncate">{repo.name}</h3>
                </a>
                <p className="text-gray-600 dark:text-gray-400 h-20 overflow-hidden">{repo.description}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Star size={16} className="mr-1 text-yellow-500" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitBranch size={16} className="mr-1 text-blue-500" /> {repo.forks_count}
                    </span>
                  </div>
                  {repo.language && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-xs">{repo.language}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github; 