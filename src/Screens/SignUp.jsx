import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import man from '../Assets/Group 11.png'
import MainHeader from '../Components/MainHeader';





const SignUp = () => {

    const navigate = useNavigate();

    const signup = () => {
        navigate('/')
      }


  return (
    <>
        <MainHeader/>

        
        <section className='form-c'>

           <div className='f-l'>
            <img src={man} alt="" />

           </div>

           <div className='f-r'>
            <h3>Hello There!</h3>
            <p>Fill the form to create an account with us</p>

            <form className='form'>

            <div>
                <input type="text" placeholder='Business Name'/>
              </div>
              

              <div>
                <input type="email" placeholder=' Email Address' />
              </div>

              <div>
                <input type="text" placeholder=' CAC Number' />
              </div>

              <div>
                <input type="tel" placeholder='Phone Number'/>
              </div>

              <div>
                <input type="text" placeholder='Address' />
              </div>
              
              <div>
                <input type="password" placeholder='Set a password' />
              </div>
              
              
              <p>Logo image*</p>
              <div>
                
                <input type="file" name="" id="" />
              </div>

              <button type="submit" onClick={signup}>Submit</button>
              {/* <p className='switch'>Already have an account? <Link to='/'>Login</Link></p> */}

            </form>
           </div>

        </section>
    </>
  )
}

export default SignUp