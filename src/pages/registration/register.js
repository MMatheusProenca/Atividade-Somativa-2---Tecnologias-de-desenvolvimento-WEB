import React from 'react'
import  {Link}  from 'react-router-dom'
import './styleRegister.css'
import firebase from '../../firebase/firebase'
import Loading from '../loading/loading';

class RegisterForm extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         email: "",
         senha: "",
         nome: "",
         sobrenome: "",
         dtnasc: "",
         showLoading: ""
      }
      this.record = this.record.bind(this)
   }
   resetFilds(){
      document.querySelector('.input-email').value = ""
      document.querySelector('.input-senha').value = ""
      document.querySelector('.input-nome').value = ""
      document.querySelector('.input-sobrenome').value = ""
      document.querySelector('.input-dtnasc').value = ""
   }
   async record(e){
      e.preventDefault()
      //user validation
      if(document.querySelector('.input-email').value === "" &&
      document.querySelector('.input-senha').value === "" &&
      document.querySelector('.input-nome').value === "" &&
      document.querySelector('.input-sobrenome').value === "" &&
      document.querySelector('.input-dtnasc').value === ""
      ){
         alert("Por favor, preencha os campos!")
         return
      }
      else if(document.querySelector('.input-email').value === ""){
         alert("Email inválido")
         return
      }else if(document.querySelector('.input-senha').value === ""){
         alert("Senha inválida")
         return
      }else if(document.querySelector('.input-nome').value === ""){
         alert("Nome inválido")
         return
      }else if(document.querySelector('.input-sobrenome').value === ""){
         alert("Sobrenome inválido")
         return
      }else if(document.querySelector('.input-dtnasc').value === ""){
         alert("Data de nascimento inválida")
         return
      }else{

         await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then((resolve) => {
            this.setState({showLoading: true})
            firebase.firestore().collection("usuario").doc(resolve.user.uid).set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            dtnasc: this.state.dtnasc
         })
         console.log(resolve);
          })
          setTimeout(function(){this.setState({showLoading: false})}.bind(this),3000)
          this.resetFilds()
          window.location.href = "./login"
      }
      
      
  }
   render(){
      return (
      <div className='mainContainer'>
         <form className="form">
            <p className="form-title">Cadastre-se</p>
            <div className="input-container">
               <input required className="input-email" placeholder="Email" type="email" onChange={(e) => this.setState({email: e.target.value})} />
            </div>
            <div className="input-container">
               <input required className="input-senha" placeholder="Senha" type="password" onChange={(e) => this.setState({senha: e.target.value})} />
            </div>
            <div className="input-container">
               <input required className="input-nome" placeholder="Nome" type="text" onChange={(e) => this.setState({nome: e.target.value})} />
            </div>
            <div className="input-container">
               <input required className="input-sobrenome" placeholder="Sobrenome" type="text" onChange={(e) => this.setState({sobrenome: e.target.value})} />
            </div>
            <div className="input-container">
               <input required className="input-dtnasc" placeholder="Data de nascimento" type="date" onChange={(e) => this.setState({dtnasc: e.target.value})} />
            </div>
            <button className="submit" type="submit" onClick={this.record}>Cadastrar</button>
            <p className="signup-link"> Tem conta? <Link to={"/login"}>Faça login</Link></p>
         </form>
         {this.state.showLoading && <Loading/>}
      </div>
      )
   }
}

export default RegisterForm