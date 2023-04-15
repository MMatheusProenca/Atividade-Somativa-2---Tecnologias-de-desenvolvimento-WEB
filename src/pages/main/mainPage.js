import React from 'react'
import './styleMain.css'
import { Link } from 'react-router-dom'
import firebase from '../../firebase/firebase'
import Loading from '../loading/loading'

class MainPage extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         nome: "",
         sobrenome: "",
         dtnasc:"",
         email:"",
         showLoading: ""
         
      }
   }
   async componentDidMount(){
      await firebase.auth().onAuthStateChanged(async (usuario)=>{
         setTimeout(function(){this.setState({showLoading: false})}.bind(this),4000)
         if(usuario){
            let id = usuario.uid
            let email = usuario.email
            await firebase.firestore().collection("usuario").doc(id).get().then((retorno) => {
               this.setState(
                  {
                     nome: retorno.data().nome, 
                     sobrenome: retorno.data().sobrenome,
                     dtnasc: retorno.data().dtnasc,
                     email: email
                  }
               )
            })
         }
         else{
            window.location.href = "./login"
         }
      })
   }
   render(){
   return (
   <div className='mainContainer'>
      <form className="form">
         <p className="form-title">Informações do usuário</p>
         <div className="input-container">
         <p>Nome: {this.state.nome}</p>
         </div>
         <div className="input-container">
            <p>Sobrenome: {this.state.sobrenome}</p>
         </div>
         <div className="input-container">
            <p>Email: {this.state.email}</p>
         </div>
         <div className="input-container">
            <p>Data de nascimento: {this.state.dtnasc}</p>
         </div>
         <Link to={"/login"}><button className="submit" type="submit">Sair</button></Link>
      </form>
      {this.state.showLoading && <Loading/>}
   </div>
   )
   }
}

export default MainPage