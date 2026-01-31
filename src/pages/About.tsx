import type { CSSProperties } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce";

function About() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <div ref={ref} id="about" className={`w-full bg-white  `}>
      <div className="p-8 pt-24 container mx-auto max-w-6xl relative z-10 bg-white flex-col justify-center items-center md:p-24 space-y-8">
        <div
          className={`flex items-center justify-center fade-in-section ${isVisible ? "is-visible" : ""}`}
          style={{ "--offset": "10vh" } as CSSProperties}
        >
          <span className="text-3xl font-bold">About Me</span>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <p
              className={`text-lg  text-gray-700 horizontal-fade-in ${isVisible ? "is-visible" : ""}`}
              style={{ "--offset": "5vw" } as CSSProperties}
            >
              I'm an AI Engineer with expertise in data science, machine
              learning, and deep learning. My passion lies in building
              intelligent systems that solve real-world problems. With a strong
              background in predictive modeling, classification, and data
              analysis, I specialize in developing and deploying AI solutions
              that drive business value. I'm proficient in Python and ML
              frameworks like TensorFlow, scikit-learn, and OpenCV, and have
              experience integrating APIs like OpenAI, Gemini, and other LLMs
              for chatbot development and automation.
            </p>
          </div>
          <div
            className={`w-full md:w-1/2 space-y-2 horizontal-fade-in  ${isVisible ? "is-visible" : ""}`}
            style={{ "--offset": "-5vw" } as CSSProperties}
          >
            <div className="flex  text-2xl font-semibold pb-5">
              Key Expertise
            </div>
            <div className="">
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Machine Learning &amp; Deep Learning Model Development
                  </span>
                </li>
                <li className="flex items-start group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Machine Learning &amp; Deep Learning Model Development
                  </span>
                </li>
                <li className="flex items-start group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Machine Learning &amp; Deep Learning Model Development
                  </span>
                </li>
                <li className="flex items-start group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Machine Learning &amp; Deep Learning Model Development
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
