import  React,{useState, useEffect} from 'react';
import Axios from "axios";
import "./leftAnimation.css";

const textURL="https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1";

function LeftAnimation(){

    const [text,setText]=useState([]);
    useEffect(()=>
    {
        async function fetchData(){
            const output=await Axios.get(textURL);
            const result=output.data.texts;
            setText(result)
        };

        fetchData();

    },[]);
  return (
    <div className="left">
       {text.map(function(i)
       {
        return(
        <div className="left-content">
        <h1>{i.heading}</h1>
        <h2>{i.subHeading}</h2>
        <p>{i.description}</p>
        </div>
        )
       })

       }
    </div>
  )
}

export default LeftAnimation;