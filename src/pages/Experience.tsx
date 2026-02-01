import type { CSSProperties } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce";

function Experience() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div
        ref={ref}
        id="experience"
        className="p-8 pt-24 container mx-auto max-w-6xl relative z-10 bg-gray-50 flex-col justify-center items-center md:p-24 space-y-8"
      >
        <div
          className={`flex items-center justify-center fade-in-section ${isVisible ? "is-visible" : ""} `}
          style={{ "--offset": "10vh" } as CSSProperties}
        >
          <span className="text-3xl font-bold">Professional Experience</span>
        </div>
        <div
          className={`bg-white border-l-4 border-purple-500 rounded-md p-6 shadow-md transition-transform  fade-in-section hover-effect  ${isVisible ? "is-visible" : ""}`}
          style={{ "--offset": "10vh" } as CSSProperties}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div className="">
              <h3 className="text-xl font-bold">Associate Software Engineer</h3>
              <p className="text-purple-500 font-medium">
                Firstsource Solutions LTD
              </p>
            </div>
            <p className="text-lg text-gray-600">Sept 2024 - Present</p>
          </div>
          <div>
            <ul className=" list-disc list-inside space-y-2 text-gray-700">
              <li>Design & Implemented a centralized logger microservice</li>
              <li>
                Configured CI/CD pieplines on AWS & Azure to deploy
                containarized applications{" "}
              </li>
              <li>Worked on implementation & deployment of microservices</li>
              <li>Implemented Infra as Code using Cloudformation on AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
