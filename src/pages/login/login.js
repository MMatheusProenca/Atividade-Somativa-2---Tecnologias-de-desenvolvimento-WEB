import React from 'react'
import { Link } from 'react-router-dom'
import './styleLogin.css'
import firebase from '../../firebase/firebase'
import Loading from '../loading/loading'

class LoginForm extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         email: "",
         senha: "",
         showLoading:""
      }
      this.access = this.access.bind(this)
   }
   async access(e){
      e.preventDefault()
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
         this.setState({showLoading: true})
         window.location.href = "./inicio"
      })
      .catch(() => {
         alert("Senha ou usuário inválido!")
      })
   }
   render(){
   return (
   <div className='mainContainer'>
      <form className="form">
         <p className="form-title">Login</p>
         <div className="input-container">
            <input placeholder="Email" type="email" onChange={(e) => this.setState({email: e.target.value})} required/>
         </div>
         <div className="input-container">
            <input placeholder="Senha" type="password" onChange={(e) => this.setState({senha: e.target.value})} required/>
         </div>
         <button className="submit" type="submit" onClick={this.access}>Entrar</button>
         <p className="signup-link"> Sem conta? <Link to={"/cadastro"}>Cadastre-se</Link></p>
      </form>
      {this.state.showLoading && <Loading/>}
   </div>
   )
   }
}

export default LoginForm