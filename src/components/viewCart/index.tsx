import { useContext } from "react"
import { CartContext } from "../../Context/Cart"
import { Container } from "./style"
import imagem from '../../images/seta-esquerda.png'
import {Link} from 'react-router-dom'

export function ViewCart(){

    const {pokemon, handleSearch}:any = useContext(CartContext)

    return(
        <div>
            <Container>
                <Link className="link-back" to={`/`}> 
                <img className="seta-left" src={imagem} alt="imagem de seta para esquerda" />
                </Link>
                <div className="Cart">

                <div className="information-left">
                <h1>{pokemon.name}</h1>
                <span className="tipos">
                        <span></span>{pokemon.types.map((type:any)=>(
                            <li>{type.type.name}</li>
                            ))}
                    </span>
                    <div className="stats">

                <span>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</span>
                <span>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</span>
                <span>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</span>
                <span>{pokemon.stats[3].stat.name}: {pokemon.stats[3].base_stat}</span>
                </div>
                    </div>

                <img src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon.name} />

                <div className="information-right">
                    <span>{pokemon.weight} pounds</span>
                    <span>{pokemon.base_experience} xp</span>
                    <span>{pokemon.height} ft</span>
                </div>
                </div>
            </Container>
        </div>
    )
}