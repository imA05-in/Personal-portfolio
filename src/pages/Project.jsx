import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Hero, Quote, TextBlock } from "../components/index";
import { useState, useEffect } from "react";
import useReadmeData from "../hooks/useReadmeData";

export default function Project() {
  const slug = useParams();
  const data = useSelector((state) =>
    state.gitdata.repos.filter((item) => item.name === Object.values(slug)[0]),
  );
  const ProjData = data[0];

  const title = ProjData.name;
  const img = `https://raw.githubusercontent.com/imA05-in/${title}/main/showcase/Images/screenshots/0.png`;

  const readmeData = useReadmeData({ title: title, dirPath: "showcase/TextBlock" });

  const quote = useReadmeData({ title: title, dirPath: "showcase/Quote" });

  return (
    <div className="py-2 w-full flex flex-col items-center gap-10">
      <div className="w-full">
        <Hero text={title} Himg={img} />
      </div>
      {/* texts */}
      <div className="max-w-7xl text-justify items-center  flex flex-col gap-30">
        <div>
          <TextBlock text={readmeData} />
        </div>
        <div >
          <Quote quote={quote} />
        </div>
      </div>
    </div>
  );
}
