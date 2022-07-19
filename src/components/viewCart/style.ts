
import styled from 'styled-components'

export const Container = styled.div`
   text-align:center ;
    align-items:center ;

    img.seta-left{
        width:1.8rem ;
        position:relative ;
        top:2rem ;
        left:-37rem ;
    }

   div.Cart{
       display:grid ;
       grid-template-columns:repeat(3, 1fr) ;
       margin:0  ;
       margin: 12rem auto ;
       img{
        width:12rem ;
        margin: 0 auto ;
       }
    }
    div.information-right{
        color:#F2F4F3 ;
        display:flex ;
        flex-direction:column ;
        gap:1rem;
        padding-top:2rem ;
        font-size:1.5rem ;
        span{
            border-bottom: 2px solid black;
        }
    }

    div.information-left{
        color:#F2F4F3 ;
        span.tipos{
            margin-top:1.5rem ;
            display:flexbox ;
            span{
                margin-right: 9.6rem ;
            }
            li{
                color:white ;
                list-style:none ;
                margin-right:4rem ;
                background-color:black ;
                padding:5px ;
                border-radius:10px ;
            }
            
        }
        div.stats{
            display:flex ;
            flex-direction:column ;
            font-size:1.5rem ;
            padding-top:1rem ;
            span{
            border-bottom: 2px solid black;
            margin-top:1rem ;
        }
        }
    }
`
