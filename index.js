import React from "react";

export default CountClicks () {
 const [number,setNumber] = useState(0);
 const [name,setName] = useState("");

 useEffect (()=>{
console.count("useEffect runs!");
document.title = `You clicked ${number} times!`;


 })

 
    


    return (
        <>
        <div>
        You clicked {number} times!
        </div>
        </>
    )
}



const root = document.getElementById("root");
 createRoot(root).render(

<CountClicks />
    
 )