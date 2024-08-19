import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landingpage() {
 return(
  <>
  <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
      <Row>
        <Col>
            <h3 className='textstyle'>Welcome To <span className='text-warning'>Media Player</span> </h3>
            <p className='textstyle' style={{textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet suscipit voluptate distinctio ratione harum ipsum inventore et a nesciunt soluta ducimus magni illum dicta dolor praesentium fugiat, dolorem repellat? Eveniet!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere omnis maxime natus earum enim, dolor harum nobis quibusdam quae modi. A quaerat laborum reprehenderit ex illo cupiditate, rerum maiores voluptas?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis fugiat illum esse neque! Assumenda magnam, quaerat sequi vero harum voluptates deleniti ipsa eaque asperiores! Suscipit praesentium quo id earum.
            </p>
            <Link to="/home">
            <button className='btn btn-warning mt-5'>GET START <FontAwesomeIcon icon={faArrowRight}/></button>
            </Link>

        </Col>
        <Col>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5'  height="400px"/>
        </Col>
      </Row>
  </Container>
  <div className='container mb-5 mb-5 '>
    <h3 className='textstyle '>Feature</h3>
    <div className='cards d-flex align-items-center justify-content-evenly p-3 '>
    <Card style={{ width: '18rem',background:"black" }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height= "250px" />
      <Card.Body>
        <Card.Title style={{color:"white"}}>Card Title</Card.Title>
        <Card.Text  className='textstyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',background:"black"  }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" height= "250px"/>
      <Card.Body>
        <Card.Title style={{color:"white"}}>Card Title</Card.Title>
        <Card.Text  className='textstyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',background:"black" }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" height= "250px"/>
      <Card.Body>
        <Card.Title style={{color:"white"}}>Card Title</Card.Title>
        <Card.Text  className='textstyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="warning">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
  </div>
 <div className='container mb-5 mt-5 border border-2 border-secondary p-5 rounded'>
  <Row>
    <Col>
    <h3 className='textstyle'>Simple and Powerfull </h3>
    <p className='textstyle'> <span  className='fs-5 fw-bolder'>play Everything :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex in totam, magni expedita sed dolorem. Ratione quibusdam quos hic veniam ab similique quae ex. Iure voluptate natus quos. Tempore, quam!</p>
    <p className='textstyle'> <span  className='fs-5 fw-bolder'>play Everything :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex in totam, magni expedita sed dolorem. Ratione quibusdam quos hic veniam ab similique quae ex. Iure voluptate natus quos. Tempore, quam!</p>
    <p className='textstyle'> <span  className='fs-5 fw-bolder'>play Everything :</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex in totam, magni expedita sed dolorem. Ratione quibusdam quos hic veniam ab similique quae ex. Iure voluptate natus quos. Tempore, quam!</p>
    </Col>
    <Col>
    <div className='mt-5'>
    <iframe width="600" height="350" src="https://www.youtube.com/embed/hOHKltAiKXQ" title="Hanumankind – Big Dawgs | Ft. Kalmi (Official Music Video) | Def Jam India" ></iframe>

    </div>
    </Col>
  </Row>

 </div>

  </>
 )
}

export default Landingpage