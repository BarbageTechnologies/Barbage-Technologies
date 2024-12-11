import React from 'react';

const ServiceSection = () => {
  return (
    <section className="container mx-auto p-10">
      <h2 className="text-4xl font-bold">Our Services</h2>
      <p>At Barbage Technologies, we offer a wide range of cutting-edge technology solutions to meet your business needs.</p>
      <ul className="mt-4 list-disc list-inside">
        <li>
          **Mobile App Development:** We create innovative mobile apps for iOS and Android devices to engage your audience on the go.
        </li>
        <li>
          **Desktop App Development:** We build powerful desktop applications tailored to your specific requirements.
        </li>
        <li>
          **Web App Development:** We develop robust and scalable web applications to enhance your online presence.
        </li>
        <li>
          **Machine Learning Algorithms:** We leverage the power of machine learning to extract valuable insights from your data.
        </li>
        <li>
          **AI Products:** We build intelligent AI-powered products to automate tasks and improve decision-making.
        </li>
      </ul>
    </section>
  );
};

export default ServiceSection;