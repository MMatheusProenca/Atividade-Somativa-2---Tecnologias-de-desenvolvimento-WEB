import React from 'react'
import './style404.css'
import { Link } from 'react-router-dom'

class NotFound extends React.Component{
   render(){
   return (
   <div className='Container'>
      <img src={process.env.PUBLIC_URL + "/img/404.gif"} alt='404 error'/>
      <h1>Página não encontrada</h1>
      <Link className='back' to={"/"}><button>Início</button></Link>
   </div>
   )
   }
}

export default NotFound