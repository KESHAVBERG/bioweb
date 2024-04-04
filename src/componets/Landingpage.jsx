import '../css/landing.css'
import Doctor from '../assests/doctor.jpg'
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
      return (
            <div className='container '>
                  <div className="contents scale-up-center">
                        <div className='col-1'>
                              <div className='circle'>

                              </div>
                              <h1>ONE CLICK DIAGNOSIS</h1>
                              <hr />
                              <h2>YOUR <span id='span'>HEALTH</span> IS OUR TOP PRIORITY</h2>
                              <h3 >Upload Your Scan and get the <span id='span'>DIAGNOSIS</span>  right with simple steps</h3>
                              <Link to='/home' className='link' >
                                    <button id='btn'> Upload Scans</button>
                              </Link>

                        </div>
                        <div className='col-2'>
                              <img src={Doctor} alt="" height={'400px'} width={'650px'} />
                        </div>


                  </div>
                  <div className="aboutus">
                        <h1 style={{}}>ABOUT US</h1>

                        <h3 style={{ lineHeight: '1.6' }}>In today's fast-paced world, the need for accurate and effective diagnoses in the healthcare industry has become increasingly important. The main idea behind diagnostics is to reduce human error in medicine; This is a principle that extends medicine to other fields, such as satellite Earth observation and understanding operations in space. The main purpose in developing our work is to provide doctors with reliable tools to predict and solve customers' health problems on the online platform. We also aim to improve the overall user experience by implementing functions to manage user history and preferences.Our work focuses on image data and solves problems such as overhead, hyperparameter sensitivity, and time consumption in image processing. By addressing these issues, our goal is to provide physicians with fast, accurate results that meet their rapid decision-making and care needs, good patients.</h3>

                  </div>
            </div>
      )
}

export default LandingPage;