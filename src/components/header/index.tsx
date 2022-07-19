import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container } from "./style";
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";


interface pokemonProps{
    id:number
    name:string
    abilities:any
    types:any
    sprites:any
    weight:number
    base_experience:number
}

export function Header(){
    const [pokemon, setPokemon] = useState<pokemonProps>()
    const [input, setInput] = useState('')
    const [x, setX] = useState<any>()

    const flag = true ? pokemon == undefined : false ;

    
        
    
    
    
    
    
    
    async function handleSearch() {
        if(input != ''){
            try{
                const x = await api.get(`pokemon`)
                const response = await api.get(`pokemon/${input}`)
                setPokemon(response.data)
                setX(x.data)
            }catch{
                alert("Erro...")
            }
        }else{
            alert('digite o nome do pokemon...')
        }
    }

    console.log(x.results)
    


    return(
        <Container>
            <h1>Pokédex</h1>
            <input
             type="text"
             placeholder="Digite o nome do pokemon aqui..."
             value={input}
             onChange={(e)=>setInput(e.target.value)}
              />
            <button onClick={handleSearch}>Buscar</button>

            {flag && (
                <div>
                    {x.map((props:any, key:number)=>(
                    <span>{props.results[key].name}</span>
                ))}
                </div>
            )}

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