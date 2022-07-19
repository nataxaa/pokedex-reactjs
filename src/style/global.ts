import {createGlobalStyle} from 'styled-components'
import imagem from '../images/back.jpg'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0 ;
  }

  body{
    font-family:sans-serif ;
    background-image: url(${imagem}) ;
    background-size:cover ;
    background-repeat:no-repeat ;
  }

`