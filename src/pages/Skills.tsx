import Heading from "../components/Heading";
import SkillCard from "../components/SkilCard";
import { SkillsDetails } from "../constants/Skills";

function Skills() {
  return (
    <div id="skills" className="w-full bg-gray-100">
      <div className="p-8 pt-24 container mx-auto max-w-6xl  flex-col justify-center items-center md:p-24 space-y-8">
        <Heading title="Technical Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-3 md:space-y-0">
          {SkillsDetails.map((items) => (
            <SkillCard {...items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
