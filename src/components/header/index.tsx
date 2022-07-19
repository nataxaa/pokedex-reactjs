import { useContext, useEffect, useState } from "react";

import { Container } from "./style";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from "../../Context/Cart";
import imagem from '../../images/pokebola.png'



export function Header(){
    
    const {pokemon, handleSearch}:any = useContext(CartContext)

    const [input, setInput] = useState('')
    const [x, setX] = useState<any>()


    return(
        <Container>
            <h1>Pokédex</h1>
            <img className="imagem-pokedex" src={imagem} alt="imagem de pokebola" />
            <input
             type="text"
             placeholder="Digite o nome do pokemon aqui..."
             value={input}
             onChange={(e)=>setInput(e.target.value)}
              />
              
            <button onClick={()=>handleSearch(input)}>Buscar</button>
            
            
            {pokemon && (
                <div className="card-pokemon">
                    <Link className="link-cart" to={`/viewCart/${pokemon.id}`}>

                    <h3>{pokemon?.name}</h3>
                  <img src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon.name} />
                   
                   <div className="description">

                    <span className="tipos">
                        <span>Tipo:</span>{pokemon.types.map((type:any)=>(
                            <li>{type.type.name},</li>
                            ))}
                    </span>
                            <span>Peso:{pokemon.weight}kg</span>
                            <span>Experiencia: {pokemon.base_experience}xp</span>
                    </div>
                            </Link>

                </div>
                            
            )}
            
            
        </Container>
    )
}