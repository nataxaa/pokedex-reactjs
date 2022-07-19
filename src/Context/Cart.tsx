import { createContext, useContext, useState } from "react";
import {api} from '../service/api'


interface pokemonProps{
    id:number
    name:string
    abilities:any
    types:any
    sprites:any
    weight:number
    base_experience:number
    results:[]
    stats:any
}

export const CartContext = createContext({});

export default function CartProvider({children}:any){
    const [pokemon, setPokemon] = useState<pokemonProps>()

    async function handleSearch(input:string) {
        if(input != ''){
            try{
                const response = await api.get(`pokemon/${input}`)
                setPokemon(response.data)
            }catch{
                alert("Erro...")
            }
        }else{
            alert('digite o nome do pokemon...')
        }
    }

    return(
        <CartContext.Provider value={{handleSearch, pokemon}}>
            {children}
        </CartContext.Provider>
    )

}