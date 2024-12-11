const ContactSection = () => {
    return (
      <section className="container mx-auto p-10">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" />
          <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" />
          <textarea placeholder="Your Message" className="border p-2 w-full mb-4" rows={4}></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default ContactSection;