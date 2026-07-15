import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Hero } from "../components/index";

export default function Project() {
  const slug = useParams();
  const data = useSelector((state) =>
    state.gitdata.repos.filter((item) => item.name === Object.values(slug)[0]),
  );
  const ProjData = data[0];

  const title = ProjData.name;
  const img = `https://raw.githubusercontent.com/imA05-in/${title}/main/screenshots/0.png`;

  return (
    <div className="px-2 w-full">
      <div>
        <Hero text={title} Himg={img} />
      </div>
    </div>
  );
}
