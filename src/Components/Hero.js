import React from 'react'
import hero from '../Assets/Mask group (1).png'
import google from '../Assets/google.png'
import store from '../Assets/store.png'
import phone from '../Assets/Group 12.png'
import phone2 from '../Assets/Group 11.png'
import Newsletter from './Newsletter'
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { MdOutlineAppBlocking } from "react-icons/md";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div>
        <div className='hero'>
            <section className='hero-content'>
                <div className='h-l'>
                    <h1>Favourite  <span>Restaurants</span> At Your<span> Doorstep</span></h1>
                    <p>Enjoy up to 5% discount on items purchased via <span>AZGrey Express</span>.</p>

                    <div>
                        <img src={google} alt="" />
                        <img src={store} alt="" />
                    </div>
                </div>

                <img src={hero} alt="" className='hero-img'/>
            </section>
            
        </div>

        {/* <div className="trust">
            <h1>Trusted by</h1>
            <img src={spar} alt="" />
            <img src={arise} alt="" />
            <img src="" alt="" />
        </div> */}

        <div className="process">

            {/* <h2>Process</h2> */}
            <h3>How It Works</h3>


            <section>


                <div>
                    <span className='first'>
                        <span className='second'>
                            <FaCloudArrowDown className='c-i'/>
                        </span>

                    </span>
                    <h4>Download the App</h4>
                    <p>Open the Google Play Store or Apple App Store and search for AZ and install it on your mobile device.</p>
                </div>

                <div>
                    <span className='first'>
                        <span className='second'>
                            <FaWpforms className='c-i'/>
                        </span>

                    </span>
                    <h4>Sign Up</h4>
                    <p>Provide your email and details to effortlessly create your account and access our exciting features.</p>
                </div>

                <div>
                    <span className='first'>
                        <span className='second'>
                            <FaHouseFloodWater className='c-i'/>
                        </span>

                    </span>
                    <h4>Enjoy Features</h4>
                    <p>Discover enticing discounts across diverse categories and choose delivery or a personal shopper for your package.</p>
                </div>


            </section>

        </div>

        <section className='hero-content-second'>

            <img src={phone} alt="" className='hero-img'/>

            <div className='h-l'>
                <h6>WHO ARE WE</h6>
                <h1>About <span>AZ<span className='span'>Grey Express</span></span></h1>
                <p><span className='az'>AZ</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat mollitia excepturi doloribus quis, laudantium similique quidem beatae optio, dolor reiciendis aliquam ut at, quisquam aut libero nemo porro assumenda est!</p>

                <div>
                    <img src={google} alt="" />
                    <img src={store} alt="" />
                </div>
            </div>

        </section>


        <div className="process">


            <section>


                <div>
                    <span className='first'>
                        <span className='second'>
                            <MdOutlineAppBlocking className='c-i'/>
                        </span>

                    </span>
                    <h4>Download the App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum delectus provident dolorum, libero nulla odit molestiae facilis.</p>
                    <a href=""><button>Download</button></a>
                </div>

                <div>
                    <span className='first'>
                        <span className='second'>
                            <MdOutlineDirectionsBike className='c-i'/>
                        </span>

                    </span>
                    
                    <h4>Be a Rider</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatem sint corporis quam, quod, cum esse nulla sequi.</p>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </div>

                <div>
                    <span className='first'>
                        <span className='second'>
                            <MdOutlineFastfood className='c-i'/>
                        </span>

                    </span>
                    
                    <h4>Become our Vendor</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae sint asperiores aperiam rerum, iusto quibusdam consequatur.</p>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </div>


            </section>

        </div>

        <div className='download '>

            <section className='hero-content-second hero-content-second2'>

                

                <div className='h-l'>
                    <h1>Download the App Now!</h1>
                    <p>We offer our users a smart and rewarding purchasing experience.</p>

                    <div>
                        <img src={google} alt="" />
                        <img src={store} alt="" />
                    </div>
                </div>

                <img src={phone2} alt="" className='hero-img'/>

            </section>

        </div>

        

        

        <Newsletter/>

        
        


    </div>
  )
}

export default Hero