import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#080f1f] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-300 mb-12">
          We are committed to delivering innovative solutions that empower our users to achieve their goals seamlessly and efficiently. Our app is designed with a focus on simplicity, security, and exceptional performance.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {/* Section 1 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            Our mission is to simplify your daily tasks by providing a user-friendly platform that delivers consistent, high-quality performance. We believe in creating tools that bring value to your life.
          </p>
        </div>
        {/* Section 2 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-400">
            To revolutionize the way users interact with technology by creating solutions that are both powerful and intuitive. We aim to inspire confidence and trust through our platform.
          </p>
        </div>
        {/* Section 3 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-400">
            Our team comprises experienced developers, designers, and innovators who are passionate about technology. We are driven by a shared commitment to excellence and customer satisfaction.
          </p>
        </div>
        {/* Section 4 */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-gray-400">
            From intuitive navigation to secure data handling, our app is built to meet the unique needs of our users. We focus on delivering a seamless experience with each feature we provide.
          </p>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-4">Want to Learn More?</h2>
        <p className="text-gray-400 mb-6">
          Explore our platform and discover how it can make your life easier and more productive.
        </p>
        <a
          href="/features"
          className="bg-green-500 text-white px-6 py-3 rounded-md font-bold hover:bg-green-600 transition"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
