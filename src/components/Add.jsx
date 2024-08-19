import { faCloudArrowUp,faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../service/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    //state to store all form field value

    const [videoDetails,setVideoDetails]=useState({
      video:'',
      caption:'',
      imageURL:'',
      youtubeLink:'',
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addVideoDetails =async()=>{
      const{video,caption,imageURL,youtubeLink}=videoDetails
      if (!video||!caption||!imageURL||!youtubeLink) {
        toast.warning("please fill the form completely")
      }
      else{
          console.log("final data");
          console.log(videoDetails);
          const response = await uploadVideo(videoDetails);
          console.log(response);
          if(response.status===201){
            setUploadVideoStatus(response.data)
             toast.success(`${response.data.caption} successfully uploaded`)
              handleClose();
              setVideoDetails({
                video:'',
                caption:'',
                imageURL:'',
                youtubeLink:'',
              })
          }
          else{
           toast.error("some thing went error")
          }
        }

    }
   const getEmbeddedLink =(data) =>{
    console.log("=====get emmbed code======")
    const link =`https://www.youtube.com/embed/${data.slice(-11)}`
    // const link2 =⁠`https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
    console.log(link);
    setVideoDetails({...videoDetails,youtubeLink:link,imageURL:link2})
    
   }
  return (
    <>
    <div>
        <div className="d-flex align-items-center">
            <h5 className='textstyle'>upload a new video</h5>
            <button className='btn fs-3'onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} style={{color:"white"}}></FontAwesomeIcon></button>
        </div>
    </div>
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title><FontAwesomeIcon icon={faFilm} style={{color:"orange"}}></FontAwesomeIcon><span className='textstyle'> upload video</span></Modal.Title>
        </Modal.Header >
        <Modal.Body  className='bg-dark'>
        <Form className='border border-secondary p-3 rounded'data-bs-theme='light'>
        <p className='textstyle' style={{fontWeight:"700"}} >please fill the form</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video id" onChange={(e)=> setVideoDetails({...videoDetails, video: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video caption" onChange={(e)=> setVideoDetails({...videoDetails, caption: e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="enter youtube video url"  onChange={(e)=> getEmbeddedLink(e.target.value)}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={addVideoDetails}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default Add