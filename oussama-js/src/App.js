
import './App.css';
import {Button ,Form,FormGroup,Label,Input}
from 'reactstrap'
import { FacebookLoginButton } from "react-social-login-buttons";
function App() {
  return (
    <form className="login-form">
  <h1 className ='titre'>Formulaire</h1>
  
<div className='for'>
  <formGroup >
      <label>Email:</label>
      <input type='email' placeholder="email"/>
      </formGroup>


      <formGroup >
      <label>Password:</label>
      <input type='password' placeholder="password"/>
      
      
      
      </formGroup>
      <button calssName ="btn-lg btn-dark btn-block ">
        Log IN
        </button>
        </div>
        
        
        <div className='continue-log'>
        <div calssName='textContinue'>Ou continue avec:</div>
      <FacebookLoginButton className="log"/>
      <div className='text-center'>
      </div>
        <a href='/sing-up'>Se connecté</a>
        <span className='p-2'>|</span>
        <a href='/sing-up'>Mot de pass Oublié?</a>
      </div>
    </form>   
  
  );
}

export default App;
