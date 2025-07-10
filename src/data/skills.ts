import { AlignCenter, BarChart2, Braces, Brain, Code, Cpu, Database, FileCode2, FlaskRound as Flask, Gauge, GitBranch, LayoutGrid, LineChart, Lock, Network, Sigma, Table2, Terminal, Workflow } from 'lucide-react';

export const skills = [
  // ML/AI Skills
  { 
    id: 'ml_1',
    name: 'Neural Networks',
    category: 'ML/AI',
    icon: Brain,
    level: 5
  },
  { 
    id: 'ml_2',
    name: 'Deep Learning',
    category: 'ML/AI',
    icon: Network,
    level: 4
  },
  { 
    id: 'ml_3',
    name: 'NLP',
    category: 'ML/AI',
    icon: AlignCenter,
    level: 3
  },
  { 
    id: 'ml_4',
    name: 'Computer Vision',
    category: 'ML/AI',
    icon: LayoutGrid,
    level: 3
  },
  { 
    id: 'ml_5',
    name: 'Reinforcement Learning',
    category: 'ML/AI',
    icon: Workflow,
    level: 2
  },
  {
    id: 'ml_6',
    name: 'LLMs',
    category: 'ML/AI',
    icon: Brain,
    level: 4
  },
  { 
    id: 'ml_7',
    name: 'Time Series',
    category: 'ML/AI',
    icon: LineChart,
    level: 3
  },
  { 
    id: 'ml_8',
    name: 'Agentic AI',
    category: 'ML/AI',
    icon: Lock,
    level: 2
  },

  // Programming Skills
  { 
    id: 'prog_1',
    name: 'Python',
    category: 'Programming',
    icon: FileCode2,
    level: 5
  },
  { 
    id: 'prog_2',
    name: 'JavaScript',
    category: 'Programming',
    icon: Braces,
    level: 4
  },
  { 
    id: 'prog_3',
    name: 'SQL',
    category: 'Programming',
    icon: Database,
    level: 4
  },
  { 
    id: 'prog_4',
    name: 'C++',
    category: 'Programming',
    icon: Code,
    level: 3
  },
  { 
    id: 'prog_5',
    name: 'R',
    category: 'Programming',
    icon: Sigma,
    level: 3
  },
  { 
    id: 'prog_6',
    name: 'Java',
    category: 'Programming',
    icon: Terminal,
    level: 4
  },
  { 
    id: 'prog_7',
    name: 'C',
    category: 'Programming',
    icon: Code,
    level: 2
  },
  { 
    id: 'prog_8',
    name: 'DSA',
    category: 'Programming',
    icon: Code,
    level: 3
  },
  { 
    id: 'prog_9',
    name: 'OOP',
    category: 'Programming',
    icon: Code,
    level: 3
  },
  { 
    id: 'prog_10',
    name: 'Database',
    category: 'Programming',
    icon: Code,
    level: 4
  },
  { 
    id: 'prog_11',
    name: 'Golang',
    category: 'Programming',
    icon: Lock,
    level: 3
  },


  // Data Skills
  { 
    id: 'data_1',
    name: 'Data Cleaning',
    category: 'Data',
    icon: Table2,
    level: 4
  },
  { 
    id: 'data_2',
    name: 'Statistical Analysis',
    category: 'Data',
    icon: BarChart2,
    level: 4
  },
  { 
    id: 'data_3',
    name: 'Data Visualization',
    category: 'Data',
    icon: LineChart,
    level: 4
  },
  { 
    id: 'data_4',
    name: 'Feature Engineering',
    category: 'Data',
    icon: Gauge,
    level: 3
  },
  { 
    id: 'data_5',
    name: 'ETL Pipelines',
    category: 'Data',
    icon: Workflow,
    level: 3
  },
  { 
    id: 'data_6',
    name: 'Prompt Engineering',
    category: 'Data',
    icon: Database,
    level: 3
  },

  // Tools & Frameworks
  { 
    id: 'tool_1',
    name: 'TensorFlow',
    category: 'Tools',
    icon: Cpu,
    level: 4
  },
  { 
    id: 'tool_2',
    name: 'PyTorch',
    category: 'Tools',
    icon: Brain,
    level: 4
  },
  { 
    id: 'tool_3',
    name: 'Scikit-learn',
    category: 'Tools',
    icon: FileCode2,
    level: 4
  },
  { 
    id: 'tool_4',
    name: 'Docker',
    category: 'Tools',
    icon: Database,
    level: 4
  },
  { 
    id: 'tool_5',
    name: 'Kubernetes',
    category: 'Tools',
    icon: Network,
    level: 3
  },
  { 
    id: 'tool_6',
    name: 'Git',
    category: 'Tools',
    icon: GitBranch,
    level: 4
  },
  { 
    id: 'tool_7',
    name: 'MLflow',
    category: 'Tools',
    icon: Flask,
    level: 3
  },
  { 
    id: 'tool_8',
    name: 'AWS/GCP',
    category: 'Tools',
    icon: Lock,
    level: 4
  },
  { 
    id: 'tool_9',
    name: 'Transformers',
    category: 'Tools',
    icon: Lock,
    level: 4
  },
  { 
    id: 'tool_10',
    name: 'NLTK/Scripy',
    category: 'Tools',
    icon: Lock,
    level: 3
  },
  { 
    id: 'tool_11',
    name: 'NumPy & Pandas',
    category: 'Tools',
    icon: Lock,
    level: 4
  },
  { 
    id: 'tool_12',
    name: 'Langchain',
    category: 'Tools',
    icon: Lock,
    level: 3
  },
  { 
    id: 'tool_13',
    name: 'Vector Databases',
    category: 'Tools',
    icon: Lock,
    level: 3
  },
  
];