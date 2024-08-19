import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../service/AllApi'
import { Col, Row } from 'react-bootstrap'

function View({uploadVideoStatus}) {
  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus, setDeleteVideoStatus]=useState(false)
  const getVideos = async()=>{
    const response= await getAllVideos();
    console.log("-----getAllVideos------");
    console.log(response);
    const {data} =response;
    setAllVideos(data)
    
    
  }
  //get all videos fast in loading we hook useeffect
  //add not found by view component wwhat we add
  useEffect(()=>{
    getVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])
  return (
     <>
     <Row>
      {
        allVideos.length>0?
        allVideos?.map((videos)=>(
          <Col key={videos.id} sm={8} lg={4} md={1}>
            <VideoCard displayVideo={videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>
        )):
        <p >nothing to display</p>
      }
     </Row>
    </>
  )
}

export default View