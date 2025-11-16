import Heading from "../components/Heading"
import SkillCard from "../components/SkilCard"

function Skills() {
  return (
    <div id="skills" className="w-full bg-gray-100">
    <div className="container mx-auto max-w-6xl  flex-col justify-center items-center p-24 space-y-8">
        <Heading title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-3 md:space-y-0">
           <SkillCard/>
           <SkillCard/>
           <SkillCard/>
           <SkillCard/>
        </div>
    </div>
    </div>
  )
}

export default Skills