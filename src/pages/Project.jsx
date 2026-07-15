import { useParams } from "react-router"
import { useSelector } from "react-redux"

export default function Project(){
    const slug = useParams()
    const data = useSelector((state)=>state.gitdata.repos.filter((item)=> item.name === Object.values(slug)[0]))
    console.log(data);
    
    
    return(
        <div>
            Project: {data[0].name}
        </div>
    )
}