import React from 'react'
import './styleLoading.css'


class Loading extends React.Component{
   render(){
   return (
   <div className='mainContainer'>
      <div class="typewriter">
      <div class="slide"><i></i></div>
      <div class="paper"></div>
      <div class="keyboard"></div>
      </div>
   </div>
   )
   }
}

export default Loading