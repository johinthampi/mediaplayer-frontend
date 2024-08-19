import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../service/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function VideoCard({displayVideo,setDeleteVideoStatus}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    //for multiple functon we convert single line multiple line using {}
    const handleShow = async() => {
      const today= new Date;
      const timeStamp= new Intl.DateTimeFormat('en-GB', {
          year:'numeric',
          month:'2-digit',
          day:'2-digit',
          hour:'2-digit',
          minute:'2-digit',
          second:'2-digit'
        }).format(today);
        console.log(timeStamp);
        const reqBody = {
          url:displayVideo.youtubeLink,
          caption:displayVideo.caption,
          timeStamp:timeStamp
        }
        await addToHistory(reqBody)
        setShow(true)
        
      setShow(true);
    }
    const  deleteVideoitem = async (id)=>{
      const response = await deleteVideo(id)
      console.log("======repose======");
      
      console.log(response);
      if(response.status===200){
        setDeleteVideoStatus(true)
        console.log("successfull deleted the video");
      }
      else{
        console.log("something went wrong")
      }
      
      
    }
    const DragStarted = (e,id)=>{
      console.log(`video with id ${id} started dragging`);
      e.dataTransfer.setData("videoID",id)
      
    }
  
  return (
   <>
    <Card draggable onDragStart={(e)=>DragStarted(e,displayVideo.id)}>
      <Card.Img variant="top" src={displayVideo.imageURL} height="250px" style={{padding:"5px"}} onClick={handleShow}/>
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Title>{displayVideo.caption}</Card.Title>
        <Button variant="danger"><FontAwesomeIcon icon={faTrash} onClick={()=>deleteVideoitem(displayVideo.id)}/></Button>

        </div>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="480" src={displayVideo.youtubeLink} allowFullScreen ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}
export default VideoCard