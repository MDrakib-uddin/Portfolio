import React, { useRef } from 'react';
import { Trophy, Code, Target, TrendingUp, Award, Star } from 'lucide-react';
import { useInView } from '../../hooks/useInView';

// Import logos
import codeforcesLogo from '../../assets/images/codeforces-logo.png';
import codechefLogo from '../../assets/images/codechef-logo.jpeg';
import leetcodeLogo from '../../assets/images/leetcode-logo.png';
import hackerrankLogo from '../../assets/images/hackerrank-logo.jpeg';
import atcoderLogo from '../../assets/images/atcode-logo.jpeg';
import lightojLogo from '../../assets/images/lightoj-logo.jpeg';

const CompetitiveProgramming: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const platforms = [
    {
      id: 1,
      name: 'Codeforces',
      username: 'Rakib731',
      rating: 1216,
      maxRating: 1288,
      rank: 'Pupil',
      color: 'transparent',
      icon: codeforcesLogo,
      link: 'https://codeforces.com/profile/Rakib731',
      solved: '700+',
      contests: '20+',
    },
    {
      id: 2,
      name: 'CodeChef',
      username: 'rakib730',
      rating: 1707,
      maxRating: 1707,
      rank: '3★',
      color: 'transparent',
      icon: codechefLogo,
      link: 'https://www.codechef.com/users/rakib730',
      solved: '64+',
      contests: '5+',
    },
    {
      id: 3,
      name: 'LeetCode',
      username: 'rakib_uddin',
      rating: 1538,
      maxRating: 1538,
      color: 'transparent',
      icon: leetcodeLogo,
      link: 'https://leetcode.com/u/rakib730/',
      solved: '200+',
      contests: '10+',
    },
    {
      id: 4,
      name: 'HackerRank',
      username: 'rakibuddinraki11',
      color: 'transparent',
      icon: hackerrankLogo,
      link: 'https://www.hackerrank.com/profile/rakibuddinraki11',
      solved: '50+',
      contests: 0,
    },
    {
      id: 5,
      name: 'AtCoder',
      username: 'rakib730',
      rating: 48,
      maxRating: 48,
      rank: 'Gray',
      color: 'transparent',
      icon: atcoderLogo,
      link: 'https://atcoder.jp/users/rakib730',
      solved: '20+',
      contests: '5+',
    },
    {
      id: 6,
      name: 'LightOJ',
      username: 'rakib_uddin',
      rank: 'Intermediate',
      color: 'transparent',
      icon: lightojLogo,
      link: 'https://lightoj.com/user/rakib730',
      solved: '30+',
      contests: 0,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Codeforces 1200+ Rating',
      description: 'Secured 1200+ rating in Codeforces',
      icon: Trophy,
      date: '2024',
    },
    {
      id: 2,
      title: 'CodeChef 3-star Rating',
      description: 'Achieved 3-star rating in CodeChef',
      icon: Award,
      date: '2024',
    },
    {
      id: 3,
      title: 'LeetCode 1500+ Rating',
      description: 'Secured 1500+ rating in LeetCode',
      icon: Star,
      date: '2024',
    },
  ];

  return (
    <section id="competitive-programming" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Competitive <span className="text-blue-600 dark:text-blue-400">Programming</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about solving algorithmic challenges and participating in programming contests across various platforms.
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {platforms.map((platform, index) => (
              <div
                key={platform.id}
                className={`bg-gray-50 dark:bg-gray-800/30 rounded-xl p-6 hover:shadow-lg transition-all duration-500 transform ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: platform.color }}
                    >
                      <img src={platform.icon} alt={`${platform.name} logo`} className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        @{platform.username}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {platform.rating}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.rank}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {platform.solved}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Problems Solved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {platform.contests}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Contests
                    </div>
                  </div>
                </div>

                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Notable Achievements
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Highlights from my competitive programming journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-6 text-center transition-all duration-500 transform ${
                    isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${(index + 6) * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <achievement.icon size={32} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {achievement.description}
                  </p>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {achievement.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Approach */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Code size={28} className="mr-3 text-blue-600 dark:text-blue-400" />
                Problem Solving Skills
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Dynamic Programming & Greedy Algorithms
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Data Structure & Algorithms
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Graph Theory & Tree Data Structures
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Number Theory & Combinatorics
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Binary Search & Two Pointers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Segment Trees & Advanced Data Structures
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target size={20} className="text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Math & Geometry & Standard Template Library
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <TrendingUp size={28} className="mr-3 text-blue-600 dark:text-blue-400" />
                Learning Approach
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Regular Practice
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Solving 3-5 problems daily to maintain consistency and improve problem-solving speed.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Contest Participation
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Actively participating in weekly contests to simulate real competition environment.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Algorithm Study
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Deep diving into algorithm concepts and implementing them from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming; 