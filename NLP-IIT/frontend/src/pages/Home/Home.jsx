import { useEffect, useRef } from "react";
import banglaBanner from "../../assets/banner.png";
import LatestNews from "./components/LatestNews"; // Import the new LatestNews component

const Home = () => {
  return (
    <div>
      {/* About Section */}
      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-3">About</h2>
          <p className="text-lg leading-relaxed">
            The Bangla AI Research, Technology, and Application (BARTA) group
            works on Natural Language Processing (NLP) for Bangla language,
            developing technologies for social inclusion, accessibility, and
            language understanding. Our team focuses on using AI and advanced
            technologies to tackle linguistic challenges specific to Bangla and
            to create tools and resources for the community.
          </p>
          <p className="text-lg leading-relaxed mt-3">
            We aim to provide research breakthroughs in AI for Bangla, focusing
            on accessibility, machine learning models, and the democratization
            of NLP tools for everyone. Through our research and application,
            we're building a more inclusive digital future for Bangla speakers.
          </p>
        </div>
      </section>

      {/* New Section: Motivated Students Recruitment */}
      <section className="py-0 bg-[#f7f8fa] text-gray-800">
        <div className="container mx-auto px-4 text-center">

          {/* Top horizontal line */}
          <div className="border-t-2 border-gray-300 mb-4"></div>

          <h2 className="text-4xl font-extrabold mb-3">Join Our Research Team</h2>
          <p className="text-lg leading-relaxed mb-3 max-w-2xl mx-auto">
            We're seeking students passionate about AI and NLP to contribute to Bangla research. 
            Help us push boundaries in technology and innovation.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-black to-blue-900 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md"
              style={{ paddingLeft: '5rem', paddingRight: '5rem' }} // Adjust padding as required
            >
              Contact Us
            </a>
          </div>

          {/* Bottom horizontal line */}
          <div className="border-t-2 border-gray-300 mt-6"></div>
        </div>
      </section>

      {/* Latest News Section */}
      <LatestNews /> {/* Use the LatestNews component here */}
    </div>
  );
};

export default Home;
