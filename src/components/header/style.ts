import styled from 'styled-components'
import imagem from '../../images/forest.jpg'

export const Container = styled.div`
    align-items:center ;
    text-align:center ;

    img.imagem-pokedex{
        width:2.5rem ;
        position:relative ;
        top:-6.8rem ;
        left:-17rem ;
       
    }

    button{
        padding:10px ;
        border:0 ;
        outline:none ;
        border-radius:10px ;
        margin-left:10px ;
        cursor: pointer;
    }
    .link-cart{
        text-decoration:none ;
        color:black ;
    }
    input{
        padding:10px ;
        border-radius:10px ;
        border:0 ;
        outline:none ;
    }

    h1{
        padding-top:1.2rem ;
        padding-bottom:3rem ;
        font-size:3rem ;
        text-align:left ;
        padding-left:5rem ;
    }

    div.card-pokemon{
        background-image:url(${imagem}) ;
        background-size:cover ;
        background-position:center  ;
        background-repeat:no-repeat ;
        width:15rem ;
        height:fit-content ;
        margin: 2rem auto ;
        padding:10px ;
        border-radius:10px ;
        text-decoration:wavy ;
        font-size:1.4rem ;
        box-shadow: 5px 10px 5px ;
       
    }
    
    img{
        padding-top:1rem ;
        width:10rem ;
    }
    span.tipos{
        align-items:center ;
        display:flex ;
        text-align:center ;
        width:fit-content ;
        margin: 0 auto ;
        li{
            list-style:none ;
            margin: 0 auto ;
        }
    }
    div.description{
        margin-top:1rem ;
        padding-bottom:1rem ;
        display:flex ;
        flex-direction:column ;
    }

`