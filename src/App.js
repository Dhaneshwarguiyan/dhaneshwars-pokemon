import { IoIosSearch } from "react-icons/io";
import './App.css';
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [pokemons,setPokemons] = useState(null);
  const [items,setItems] = useState(null);

  useEffect(()=>{
    setPokemons(null);
    const getPokemon = async()=>{
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0");
      const result = await response.json();
      setPokemons(result.results);
    }
    getPokemon();
  },[])


  const changeHandler = (e)=>{
    e.preventDefault();
    if(e.target.value !== ""){
      let result = pokemons.filter((pokemon)=>{
        return pokemon.name.startsWith(e.target.value);
      })
      if(result.length > 20) result.splice(20);
      setItems(result);
    }
    else{
      setItems("")
    }
  }

  return (
    <div className="App">
      <div className="search-bar">
          <input type="text" placeholder='Search' className='search-area' onChange={(e)=>{changeHandler(e)}}/>
          <IoIosSearch  size={45}/>
      </div>
          <div className="cards">
            {items &&
              items.map((pokemon,key)=>{
                return <Card key={key} name={pokemon.name}/>
              })
            }
          </div>
    </div>
  );
}

export default App;
