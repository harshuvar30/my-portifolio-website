import SkillHeading from "./SkillHeading";
import SkillLogo from "./SkillLogo";
import SkillName from "./SkillName";

function SkillCard() {

  return   ( 
   <div className="bg-white space-x-1.5 p-6 rounded-lg flex flex-col shadow-lg  hover:shadow-xl transition-shadow duration-300">
    <div className="flex  px-2 mb-4">
        <SkillLogo skillInitials="ML"/>
        <SkillHeading title="Machine Learning"/>
    </div>
  <div className=" grid  grid-cols-2 inset-0  text-center">
                <SkillName name="Machine Learning"/>
                <SkillName name="Nodes"/>
                <SkillName name="Nodes"/>
                <SkillName name="Nodes"/>
                <SkillName name="Nodes"/>
                <SkillName name="Nodes"/>
                <SkillName name="Nodes"/>
                <SkillName name="Nodes"/>
            </div>
   </div>
  )
}


export default SkillCard;


