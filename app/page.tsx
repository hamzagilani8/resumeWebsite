import Aboutme from "@/components/aboutme";
import Education from "@/components/education";
import Professional from "@/components/professional";
import Skills from "@/components/skills";
import { aboutMe, educationalData, professionalData, skills } from "@/data/presonalData";

export default function Home() {
  return (
   <div>
    <Aboutme data={aboutMe}/>
    <Skills data={skills} />
    <Education data={educationalData}/>
    <Professional data={professionalData}/>
   </div>
  )
}
