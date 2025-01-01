
const AboutSection = () => {
  return (
    <section className="container mx-auto p-10">
      <h2 className="text-4xl font-bold">About Barbage Technologies</h2>
      <p className="mt-4">
        Barbage Technologies is a cutting-edge technology company dedicated to developing innovative software solutions. Led by software engineer and computer scientist{' '}
        <a href="https://simon-keya.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Simon Keya
        </a>, our team is committed to delivering high-quality products and services.
      </p>
      <p>
        We specialize in:
        <ul>
          <li>Mobile app development</li>
          <li>Web app development</li>
          <li>Desktop app development</li>
          <li>AI and machine learning</li>
          <li>Data science</li>
          <li>Cloud Computing</li>
        </ul>
      </p>
      <p>
        Our mission is to empower businesses and individuals through technology, providing tailored solutions that meet their specific needs.
      </p>
    </section>
  );
};

export default AboutSection;
