import type { CSSProperties } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../constants/Project";
import { useInViewOnce } from "../hooks/useInViewOnce";

function Projects() {
  const { ref, isVisible } = useInViewOnce();
  return (
    <div ref={ref} id="projects" className="w-full bg-white">
      <div className="relative p-8 pt-24 container mx-auto max-w-6xl flex-col justify-center items-center md:p-24 space-y-8">
        <div
          className={`flex justify-center items-center fade-in-section ${isVisible ? "is-visible" : ""} `}
          style={{ "--offset": "10vh" } as CSSProperties}
        >
          <h3 className="text-3xl font-bold">Featured Projects</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item) => (
            <ProjectCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
