import React, { useState, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

// Simple example of an interactive ML demo with image classification
const MLDemo: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<{ label: string; confidence: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Sample image options for the demo
  const sampleImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg',
      label: 'Cat',
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg',
      label: 'Dog',
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
      label: 'Cat',
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg',
      label: 'Dog',
    },
  ];

  // Simulate a model prediction
  const simulateImageClassification = (imageLabel: string) => {
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Simulate prediction with some randomness
      const confidence = imageLabel === 'Cat' 
        ? Math.random() * 0.15 + 0.80 // 80-95% confidence for cats
        : Math.random() * 0.15 + 0.75; // 75-90% confidence for dogs
      
      setPrediction({
        label: imageLabel,
        confidence,
      });
      setIsProcessing(false);
    }, 1500);
  };

  const handleImageSelect = (url: string, label: string) => {
    setSelectedImage(url);
    setPrediction(null);
    simulateImageClassification(label);
  };

  return (
    <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive <span className="text-blue-600 dark:text-blue-400">CV Demo</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Experience machine learning in action with this interactive image classification demo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Image Classification
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Select one of the sample images to see the AI model classify it as a cat or dog in real-time.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {sampleImages.map((image) => (
                      <div 
                        key={image.id}
                        onClick={() => handleImageSelect(image.url, image.label)}
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === image.url
                            ? 'border-blue-500 shadow-md'
                            : 'border-transparent hover:border-blue-300'
                        }`}
                      >
                        <img 
                          src={image.url} 
                          alt={`Sample ${image.label}`}
                          className="w-full h-24 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Model Prediction
                  </h3>
                  
                  <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900/50 rounded-lg p-4">
                    {!selectedImage && (
                      <p className="text-gray-500 dark:text-gray-400 text-center">
                        Select an image to see the model prediction
                      </p>
                    )}
                    
                    {selectedImage && (
                      <div className="text-center">
                        <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={selectedImage} 
                            alt="Selected" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {isProcessing && (
                          <div className="mt-4">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto animate-spin"></div>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                              Processing image...
                            </p>
                          </div>
                        )}
                        
                        {prediction && !isProcessing && (
                          <div className="mt-4 space-y-2">
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              {prediction.label}
                            </p>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                              <div 
                                className="bg-blue-600 h-4 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${prediction.confidence * 100}%` }}
                              ></div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                              Confidence: {Math.round(prediction.confidence * 100)}%
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">How it works:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  This demo simulates an image classification model that has been trained to recognize cats and dogs. 
                  In a real application, this would use a deep learning model like a Convolutional Neural Network (CNN) 
                  to process the image and predict what's in it. The confidence score represents the model's certainty 
                  in its prediction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLDemo;