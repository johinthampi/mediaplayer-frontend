import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex align-items-center justify-content-evenly'>
        <div style={{width:"400px"}}>
          <h5 style={{color:"orange"}}><FontAwesomeIcon icon={faVideo} style={{textDecoration:'none',color:'orange'}}/> Media Player</h5>
          <p style={{textAlign:"justify"}} className= "textstyle" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente, animi dolore doloremque officia eveniet nostrum, reiciendis, sit ab vel modi. Est quae praesentium soluta a? Atque nobis vel debitis!</p>
        </div>
        <div className='d-flex flex-column ms-3'>
          <h4 className= "textstyle">Links</h4>
          <Link to = '/' style={{textDecoration:'none',color:"white"}}>
          Landing page
          </Link>
          <Link to ='/home' style={{textDecoration:'none',color:"white"}}>
          Home page
          </Link>
          <Link to='/watch' style={{textDecoration:'none',color:"white"}}>
          Watch History
          </Link>
        </div>
        <div className='d-flex flex-column ms-3' >
          <h4 className= "textstyle">Guides</h4>
          <Link to = 'https://react.dev' target='_blank' style={{textDecoration:'none',color:"white"}}>
          React
          </Link>
          <Link to ='https://react-bootstrap.netlify.app' target='_blank' style={{textDecoration:'none',color:"white"}}>
          React Bootstrap
          </Link>
          <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{textDecoration:'none',color:"white"}}>
          Json server
          </Link>
        </div >
        <div className= "ms-5">
          <h4 className='textstyle'>Constact US</h4>
          <div className='d-flex'> 
            <input type="text" placeholder='enter your email' className='form-control'/>
            <button className='btn btn-warning ms-2'>subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-centerv mt-3'>
            <Link to = 'https://facebook.com' target='_blank' style={{color:"white"}}>
            <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to = 'https://instagram.com' target='_blank' style={{color:"white"}}>
            <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to = 'https://twitter.com' target='_blank' style={{color:"white"}}>
            <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to = 'https://github.com' target='_blank' style={{color:"white"}}>
            <FontAwesomeIcon icon={faGithub} />
            </Link>
            </div>

          
        </div>
      </div>
      
      
    </div>
  )
}

export default Footer