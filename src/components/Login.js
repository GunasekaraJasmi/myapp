import React from 'react'


function Login() {
    return (
        <>
           <section className="unit login">
               <div className="overlay">
                   <from className="form">
                        <input type="email" name="email" id="email" placeholder=" Enter Your email address" required/>
                        <input type='password' name='password' id='password' placeholder="Enter your password" required />
                        <button type='submit'>Log In</button>
                   </from>
               </div>
           </section>
        </>
    )
}

export default Login
