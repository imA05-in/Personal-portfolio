export default function GithubBtn({src, alt, link}){
    return(<div>
        <a href={link} target="_blank">
            <img src={src} alt={alt}  className="w-10"/>
        </a>
    </div>)
}