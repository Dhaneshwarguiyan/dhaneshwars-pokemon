import React, { useEffect, useState } from "react";
import Feature from "./Feature";

const Card = ({ name }) => {
    const [back_image,setBackImage] = useState("");
    const [front_image,setFrontImage] = useState("");
    const [stats,setStats] = useState([]);
    const [loading,setLoading] = useState(true);
     useEffect(() => {
        setLoading(true);
        setBackImage("");
        setFrontImage("");
        setStats("")
        const getItems = async () => {
        try {
            const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            const result = await response.json();
            setBackImage(result?.sprites?.front_default);
            setFrontImage(result?.sprites?.back_default);
            setStats(result?.stats)
      } catch (error) {
        console.log(
          "There was an error in the api call Please try again later...."
        );
      }
      setLoading(false);
    };
    getItems();
  }, [name]);

  return <div className="card">
    {
        !loading ? 
        <div className="c">
                    <div className="images">
        <img src={back_image}  alt="front img"/>
        <img src={front_image}  alt="back img"/>
        </div>
        <p>This is {name}</p>
        <div className="stats">
        {
            stats && stats.map((stat,key)=>{
                return <Feature key={key} stat={stat} />
            })
        }
        </div>   
        </div>:
        <div className="loader"></div>
    }
    </div>
};

export default Card;
