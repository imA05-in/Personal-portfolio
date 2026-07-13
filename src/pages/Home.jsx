import { PersonalBio } from "../components/index";

export default function Home() {
  return (
    <div className="flex justify-center ">
      <PersonalBio
        heading={`Hi, I'm Abhishek Singh!`}
        introPrimary={`I’m a frontend developer and bit of a  designer. I’m passionate about building modern and cool looking web sites, specializing in modern framework like react and surrounding frontend technologies like redux for state management, react-router for client-side routing, react-hook-form, tailwindCSS, HTML, Js, and Figma.`}
        introSecondary={`When im not busy i like to read books and learn new stuff. `}
      />
    </div>
  );
}
