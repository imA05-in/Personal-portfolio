import { useState,useEffect } from "react"

export default function useGitData({user = "imA05-in"}){
    
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/${user}/repos`)
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return data
}