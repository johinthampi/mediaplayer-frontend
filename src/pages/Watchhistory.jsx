import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../service/AllApi'
import { Button } from 'react-bootstrap'

function Watchhistory() {
  const [allHistory,setAllHistory]=useState([])
  const getWatchHistory = async ()=>{
    const {data}= await getHistory();
    setAllHistory(data)
    console.log(data);
         
  }
  useEffect(()=>{
    getWatchHistory();
  },[])
  const handleDelete = async (historyId)=>{
    await deleteHistory(historyId);
    getWatchHistory()
  }
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between'> 
      <h3 className='textstyle'>watch history</h3>
      <Link to='/home' style={{textDecoration:'none', color:"white" ,fontWeight:"750",fontSize:"18px"}}>
      <h6><FontAwesomeIcon icon={faArrowLeft}/>Back to home</h6>
      </Link>
    </div>
    <table className='table container mb-5 mt-5'data-bs-theme='dark'>
      <thead >
        
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>URL</th>
          <th>time stamp</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
      {
          allHistory.length>0?
          allHistory.map((item)=>(
            <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.timeStamp}</td>
          <td ><Button style={{background:"black"}} onClick={()=>handleDelete(item?.id)}>
            <FontAwesomeIcon icon={faTrash} style={{color:"red"}} />
            </Button>
            </td>
        </tr>
          )):
          <tr>
          <td colSpan="5"><p>no history found</p></td>
          </tr>

        }
        
      </tbody>
    </table>

    </>
  )
}

export default Watchhistory