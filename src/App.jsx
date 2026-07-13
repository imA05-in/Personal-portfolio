import "./App.css";
import {Button, Content, Footer, Hero, ImageBlock, NavBar, PersonalBio, ProjectCard, SkillList,} from "./components/index";
import {Outlet} from "react-router"
function App() {
  return (
    <div className="flex flex-col min-h-screen items-center ">
      <NavBar/>
      <main className="flex-1 max-w-7xl w-full ">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
