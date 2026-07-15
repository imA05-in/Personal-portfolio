import { Button } from "../index";
import ProjThmbn from "../../assets/images/projThumbnail.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
export default function ProjectCard({
  thumbnail = ProjThmbn,
  title = "Title",
  description = "Lorem",
  btnLable,
}) {

  return (
    <div className="flex md:flex-row flex-col gap-2">
      {/* thumbnail */}
      <div className="max-w-100 ">
        <img src={`https://raw.githubusercontent.com/imA05-in/${title}/main/screenshots/0.png`} alt="" className="rounded" />
      </div>
      {/* desciption */}
      <div className="flex flex-col justify-between py-2 md:px-4 gap-2">
        {/* title */}
        <div className="font-medium text-lg">{title}</div>
        {/* description */}
        <div className="project description">{description}</div>
        <NavLink
        to={`/${title}`}
        >
          <Button label={btnLable} classname="" />
        </NavLink>
      </div>
    </div>
  );
}
