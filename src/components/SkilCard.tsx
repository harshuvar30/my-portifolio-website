import type { CSSProperties } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce";
import type { SkillsDetailsInterface } from "../interface/SkillsDetails";
import SkillHeading from "./SkillHeading";
import SkillLogo from "./SkillLogo";
import SkillName from "./SkillName";

function SkillCard(skillDetails: SkillsDetailsInterface) {
  const { ref, isVisible } = useInViewOnce();
  return (
    <div
      ref={ref}
      className={`bg-white space-x-1.5 p-6 rounded-lg flex flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300 fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ "--offset": "10vh" } as CSSProperties}
    >
      <div className="flex  px-2 mb-4">
        <SkillLogo skillInitials={skillDetails.logo} />
        <SkillHeading title={skillDetails.skillHeading} />
      </div>
      <div className=" grid  grid-cols-2 inset-0  text-center">
        {skillDetails.skillsName.map((items) => (
          <SkillName name={items} />
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
