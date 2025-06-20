import { Brain, Database, LineChart, Image, Code, Cpu } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: 'Neural Network for Image Recognition',
    description: 'Developed a convolutional neural network for high-accuracy image recognition on the CIFAR-10 dataset.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    tags: ['Computer Vision', 'CNN', 'TensorFlow', 'Python'],
    link: '#',
    github: '#',
    demo: '#',
    icon: Brain,
  },
  {
    id: 2,
    title: 'Natural Language Processing Chatbot',
    description: 'Built an intelligent chatbot using transformer models for understanding and responding to customer queries.',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
    tags: ['NLP', 'Transformers', 'PyTorch', 'BERT'],
    link: '#',
    github: '#',
    icon: MessageSquare,
  },
  {
    id: 3,
    title: 'Predictive Analytics for E-commerce',
    description: 'Created a product recommendation system using collaborative filtering and content-based approaches.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg',
    tags: ['Recommender Systems', 'ML', 'Python', 'SQL'],
    link: '#',
    github: '#',
    demo: '#',
    icon: LineChart,
  },
  {
    id: 4,
    title: 'Anomaly Detection in Time Series Data',
    description: 'Developed a system for detecting anomalies in IoT sensor data using LSTM networks and statistical methods.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    tags: ['Time Series', 'LSTM', 'Anomaly Detection', 'IoT'],
    link: '#',
    github: '#',
    icon: Cpu,
  },
  {
    id: 5,
    title: 'Data Pipeline for Real-time Analytics',
    description: 'Built a scalable data pipeline for processing and analyzing streaming data from multiple sources.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    tags: ['Big Data', 'Spark', 'Kafka', 'AWS'],
    link: '#',
    github: '#',
    icon: Database,
  },
  {
    id: 6,
    title: 'Generative AI Art Project',
    description: 'Developed a GAN-based model for creating unique digital artwork based on various artistic styles.',
    image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg',
    tags: ['GAN', 'Deep Learning', 'Art', 'StyleGAN'],
    link: '#',
    github: '#',
    demo: '#',
    icon: Image,
  },
];

// Add the missing import
import { MessageSquare } from 'lucide-react';