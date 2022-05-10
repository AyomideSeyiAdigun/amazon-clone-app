 
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth,db } from './firebase';
import './Login.css'
function Login() {
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const  navigate = useNavigate();


    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
                navigate("/", { replace: true });
            
            // ...
        })
        .catch((error) => {
             alert(error.message);
        });
        
    }

    const register = e =>{
        e.preventDefault();
       auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                navigate("/", { replace: true });
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login'>
          `<Link to='/'>  <img alt='' className='login__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG3.png'/></Link>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                     <h5>E-mail</h5>
                     <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                     <h5>Password</h5>
                     <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                     <button className='login__signInButton' onClick={signIn} type='submit  '>Sign In</button>
                </form> 
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Condirions of Use &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based ads Notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div> 
        </div>
    )
}

export default Login