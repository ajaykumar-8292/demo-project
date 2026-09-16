import { Link } from "react-router-dom";
import "../App.css";
import heroImage from  "../assets/hero.jpg";

import { FaLaptopCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { DiOpensource } from "react-icons/di";
import { CiMobile1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { TbSeo } from "react-icons/tb";

function Home() {
  return (
  <main>
    <div className="main-container">
      <div className="card">
        <h1>Innovative IT Solutions <br /> for Your Business</h1>
        <p>We provide cutting-edge technology solutions to help businesses grow and <br />succeed in the digital age.</p>

        
        <div className="btn">


           <Link to="/contact">
            <button className="get-start">
              Get Start
            </button>
          </Link>

          
            <Link to="/services">
            <button id="btn">
              Our Services
            </button>
          </Link>
        </div>
      </div>


       <div className="card">

        <img src={heroImage}  alt="Hero " />
       </div>
    </div>
{/*services container*/}

    <div className="services-container">
    <span>OUR SERVICES</span>
   <h1>We Provide Best IT Services</h1>
   <p>We offer a wide range of IT services to help your business grow and succeed in the digital world.</p>
 </div>
 <div className="services">

<div className="services-card">
<div className="icon">
  <FaLaptopCode className="service-icon" />
  <h2>Web Development</h2>
  <p>We create responsive, user-friendly websites that help you establish a strong online presence..</p>

</div>
</div>



<div className="services-card">
  
<div className="icon">
  <FaMobileAlt  className="service-icon" />
  <h2>
Mobile App Development</h2>
  <p>Custom mobile applications for iOS and Android platforms designed to meet your specific business requirements...</p>

</div>
</div>


<div className="services-card">

  <div className="icon">
  <IoMdTrendingUp   className="service-icon" />
  <h2>Digital Marketing</h2>
  <p>
Digital Marketing
Strategic digital marketing services to increase your online visibility and drive targeted traffic to your website.</p>

</div>

</div>

 </div>


{/*About Section  */}
<div className="about">
  <h2>About</h2>
  <p>We Are Leading IT Solution Provider</p>

 <div className="about-container">

  <div className="about-card">
    <img src={heroImage} />
    <div className="box">
      <h2 id="heading">12+</h2>
      <p id="para">Years Experience</p>
    </div>

  </div>

  <div className="about-card">
    <h4>WebNest IT Solutions Private Limited is a full-service technology company dedicated to delivering innovative software solutions that help businesses thrive in the digital age.</h4>
    <h4>Our team of experienced developers, designers, and strategists work together to create custom solutions that align with your business goals and drive measurable results.</h4>

   <div className="feature">
   <div className="feature-icon">
    <div className="feature-card">
      <FaAnglesRight />
      </div>
      <div className="text">
    <li>Custom software development tailored to your needs</li>
    </div>
    </div>

    <div className="feature-icon">
    <div className="feature-card">
      <FaAnglesRight />
      </div>
      <div className="text">
    <li>Responsive and user-friendly web design</li>
    </div>

    </div>

     <div className="feature-icon">
    <div className="feature-card">
      <FaAnglesRight />
      </div>
      <div className="text">
    <li>Mobile applications for iOS and Android</li>
    </div>

    </div>

    <div className="feature-icon">
    <div className="feature-card">
      <FaAnglesRight />
      </div>
      <div className="text">
    <li>Education systems and learning management platforms</li>
    </div>

    </div>

    <div className="feature-icon">
    <div className="feature-card">
      <FaAnglesRight />
      </div>
      <div className="text">
    <li>Education systems and learning management platforms</li>
    </div>

    </div>












 

   
   </div>
  <Link to="/contact">
            <button className="get-start">
              Learn More
            </button>
          </Link>

  
   
</div>



 </div>
 </div>



 {/*why youe choose us*/}
 <div className="choose">
  <h1>Why Choose Us</h1>
  <h2>Features That Set Us Apart</h2>
  <p>We combine technical expertise with creative thinking to deliver exceptional results that <br /> drive business growth</p>
  <div className="choose-container">

    <div className="choose-card">
      <div className="icon">
<IoIosRocket className="icon-text" />
      </div>
      <h3>Fast Development</h3>
      <p>Quick turnaround time without <br  /> compromising on quality</p>
      <button>2x Faster</button>

    </div>
    
   
    <div className="choose-card">
      <div className="icon">
<DiOpensource  className="icon-text" />
      </div>
      <h3>Secure & Reliable</h3>
      <p>Enterprise-grade security and 99.9% <br />uptime guarantee</p>
      <button> Uptime</button>

    </div>

     <div className="choose-card">
      <div className="icon">
<CiMobile1 className="icon-text" />
      </div>
      <h3>Responsive Design</h3>
      <p>Perfect display and functionality across all <br />devices</p>
      <button>Mobile</button>

    </div>

     <div className="choose-card">
      <div className="icon">
<TbSeo className="icon-text" />
      </div>
      <h3>SEO Optimized</h3>
      <p>Built-in SEO features to rank higher in<br  /> search results</p>
      <button>Traffic</button>

    </div>

     <div className="choose-card">
      <div className="icon">
<BiSupport className="icon-text" />
      </div>
      <h3>24/7 Support</h3>
      <p>Round-the-clock technical support and <br />maintenance</p>
      <button>Support</button>

    </div>

     <div className="choose-card">
      <div className="icon">
<MdEnergySavingsLeaf className="icon-text" />
      </div>
      <h3>Cost-Effective</h3>
      <p>Competitive pricing with no hidden <br  /> charges</p>
      <button>Saving</button>

    </div>
    






  </div>

 </div>
 
 {/*Footer Section container */}
 <div className="footer">
  



 </div>
  </main>

  

 
  );
}

export default Home;