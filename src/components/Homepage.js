import { useNavigate } from 'react-router';
import camera from "../images/camera.png";
import './Homepage.css';
import Typewriter from "typewriter-effect";
import {Typography} from "@material-ui/core";



const Homepage = () => {
    let navigate = useNavigate();
    
    
    
    return (    
             <div className='grid'>
                  
                    <div className="text-box">
                        <h1 className='Typo'>
                          Welcome to <span className='Great'> 
                          <Typewriter onInit={(typewriter) => {   typewriter.typeString(  "  the Future").pauseFor(2000).deleteAll().typeString( " Possibilities").deleteAll().typeString( " Greatness").start();}} /> 
                          </span>
                        </h1>

                        <p className="everything">
                            Everything is possible with optimummedias
                        </p>
                        <div className='bottons'>
                        <a href onClick={() => {navigate("/About");}}>Contact Us</a>
                        
                        <a href onClick={() => {navigate("/Services");}}className="btn">Services</a>
                        </div>
                    </div>
                    <img src={camera} className="user-img" alt="hey"  />

                    
            </div>
                   
        

     );
}

export default Homepage;

