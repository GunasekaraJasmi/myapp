import React from 'react'

const SignUp = () => {
    return (
        <>
            <section className="unit login">
               <div className="overlay">
                   <from className="form">
                        <input type="text" name="username" id="username" placeholder=" Enter Your UserName" required/>
                        <input type="email" name="email" id="email" placeholder="Enter Your email address" required/>
                        <input type='password' name='password' id='password' placeholder="Enter your password" required />
                        <input type='password' name='password2' id='password2' placeholder="Confirm your password" required />
                        <button type='submit'>Create Your Account</button>
                   </from>
               </div>
           </section>
           
        </>
    )
}

export default SignUp
