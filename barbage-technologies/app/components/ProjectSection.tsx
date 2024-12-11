import React from 'react';

const ProjectSection = () => {
  return (
    <section className="container mx-auto p-10">
      <h2 className="text-4xl font-bold">Our Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold">Project 1: Mobile App for E-commerce</h3>
          <p>
            Developed a cutting-edge mobile app for a leading e-commerce platform, enabling users to shop on-the-go with ease.
          </p>
          <ul>
            <li>Key features: product browsing, secure checkout, personalized recommendations</li>
            <li>Technologies used: React Native, Firebase</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold">Project 2: AI-Powered Chatbot</h3>
          <p>
            Created an intelligent chatbot using natural language processing to provide 24/7 customer support.
          </p>
          <ul>
            <li>Key features: natural language understanding, sentiment analysis, automated responses</li>
            <li>Technologies used: Python, TensorFlow, Dialogflow</li>
          </ul>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default ProjectSection;