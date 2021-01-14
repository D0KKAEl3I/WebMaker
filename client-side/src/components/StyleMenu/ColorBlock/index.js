export default function ColorBlock({color, onClick}){
    return(
        <div onClick={onClick} style={{
            backgroundColor:color, 
            width:25+"px", 
            height:25+"px",
            display:"inline-block",
            borderRadius:8+"px",
            margin:4+"px"
            
        }}></div>
    )
}