import {PersonalBio,ProjectCard} from "../index"
import useGitData from "../../hooks/useGitData"


export default function Content(){
    const data = useGitData({ user: "imA05-in" })

  return (
    <div className="flex flex-col gap-10 w-full px-2">
      <PersonalBio
        heading={`Hi, I'm Abhishek Singh!`}
        introPrimary={`I’m a frontend developer and bit of a  designer. I’m passionate about building modern and cool looking web sites, specializing in modern framework like react and surrounding frontend technologies like redux for state management, react-router for client-side routing, react-hook-form, tailwindCSS, HTML, Js, and Figma.`}
        introSecondary={`When im not busy i like to read books and learn new stuff. `}
      />

      {/* work */}
      <div className="flex flex-col gap-10 ">
        <h2 className="font-medium text-xl">Work</h2>
        {data.map((item) => (
          <div key={item.name} className="pt-6">  {/* filter unwanted projects */}
            <ProjectCard
              title={item.name}
              btnLable={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}