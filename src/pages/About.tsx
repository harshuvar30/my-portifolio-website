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
              I’m a Full-Stack Software Engineer with a strong focus on backend
              systems, cloud architecture, and DevOps. I build scalable
              microservices, automate infrastructure, and design reliable CI/CD
              pipelines that support high-impact production workloads.
            </p>

            <p
              className={`text-lg  text-gray-700 horizontal-fade-in ${isVisible ? "is-visible" : ""}`}
              style={{ "--offset": "5vw" } as CSSProperties}
            >
              Beyond traditional web development, I actively work with AI
              integrations and LLM-based solutions, and I’m currently learning
              Blockchain and advanced AI concepts to broaden my skill set and
              stay aligned with emerging technologies.
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
                <li className="flex items-start ">
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
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Backend &amp; Frontend Development, using NodeJs & React.
                  </span>
                </li>
                <li className="flex items-start">
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
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Deploying applications on cloud platforms like AWS &amp;
                    Azure.
                  </span>
                </li>
                <li className="flex items-start">
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
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Containarization of applications using Docker &amp;
                    deployment on Kubernetes.
                  </span>
                </li>
                <li className="flex items-start">
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
                    className="lucide lucide-chevron-right w-5 h-5 text-purple-600 mt-0.5 shrink-0 transform hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="text-gray-700 ">
                    Working with event driven microservice architecture.
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
