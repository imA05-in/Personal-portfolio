import "./App.css";
import {Button, Content, Footer, Hero, ImageBlock, NavBar, PersonalBio, ProjectCard, SkillList,} from "./components/index";
import {Outlet} from "react-router"
function App() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#FFFDFB]">
      <NavBar/>
      <main className="flex-1 flex flex-col items-center w-full ">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
