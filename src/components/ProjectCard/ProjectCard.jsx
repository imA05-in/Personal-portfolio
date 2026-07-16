import { Button,GithubBtn } from "../index";
import ProjThmbn from "../../assets/images/projThumbnail.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import githubLogo from "../../assets/images/githubLogo.png"

export default function ProjectCard({
  thumbnail = ProjThmbn,
  title = "Title",
  description = "Lorem",
  btnLable,
  gitLink,
}) {

  const img = `https://raw.githubusercontent.com/imA05-in/${title}/main/showcase/Images/screenshots/0.png`
  return (
    <a href={img} target="_blank">
    <div className="flex md:flex-row flex-col gap-2">
      {/* thumbnail */}
      <div className="max-w-100 ">
        <img src={img} alt="" className="rounded" />
      </div>
      {/* desciption */}
      <div className="flex flex-col justify-between py-2 md:px-4 gap-2 w-full">
        {/* title */}
        <div className="font-medium text-lg">{title}</div>
        {/* description */}
        <div className="project description">{description}</div>
      
        <div className="flex items-center justify-between gap-10 ">
        <NavLink
        to={`/${title}`}
        >
          <Button label={btnLable} classname="" />
        </NavLink>
        <div>
          <GithubBtn 
          alt={`github`}
          src={githubLogo}
          link={gitLink}
          
          />
        </div>
          </div>
      </div>
    </div>
    </a>
  );
}
