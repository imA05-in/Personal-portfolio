import {Button} from "../index";
import ProjThmbn from "../../assets/images/projThumbnail.png"
export default function ProjectCard({thumbnail = ProjThmbn, title = "Title", description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis vel molestias cupiditate a delectus nam aperiam omnis est fugiat magnam animi rem ex magni, accusantium nisi itaque molestiae deserunt!", btnLable}){
    return(
        <div className="flex md:flex-row flex-col gap-2">
            {/* thumbnail */}
            <div className="max-w-100 ">
                <img src={ProjThmbn} alt="" className="rounded" />
            </div>
            {/* desciption */}
            <div className="flex flex-col justify-between p gap-2">
                {/* title */}
                <div className="font-medium text-lg">
                    {title}
                </div>
                {/* description */}
                <div className="project description">
                    {description}
                </div>
                <div>
                <Button label={btnLable} classname=""/>
                </div>
            </div>
        </div>
    )
}