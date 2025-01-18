import React from "react";

const Features = () => {
  const features = [
    {
      title: "Seamless Navigation",
      description: "Enjoy a smooth and intuitive experience across our platform with fast loading and responsive design.",
      icon: "🌐",
    },
    {
      title: "Dark Mode Compatibility",
      description: "Immerse yourself in a sleek, dark-themed interface for reduced eye strain and modern aesthetics.",
      icon: "🌙",
    },
    {
      title: "Real-Time Updates",
      description: "Get instant updates and live notifications to stay in sync with your app’s data.",
      icon: "⚡",
    },
    {
      title: "Cross-Platform Support",
      description: "Access your app on mobile, tablet, or desktop without any compromise on quality.",
      icon: "📱",
    },
    {
      title: "Secure Data Handling",
      description: "We prioritize your data security with encryption and robust authentication methods.",
      icon: "🔒",
    },
    {
      title: "Customizable Features",
      description: "Personalize the app to match your preferences and requirements.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="bg-[#080f1f] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our App?</h2>
        <p className="text-lg text-gray-300 mb-12">
          Discover the unique features that make our app the perfect choice for your needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
