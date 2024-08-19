import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addCategory, deleteCategory, getAllCategory, getAllVideosById, updateCategory } from "../service/AllApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoCard from "./VideoCard";

function Category() {
  const [show, setShow] = useState(false);

  const [categoryName, setCategoryName] = useState({});
  const [allCategory, setAllCategory] = useState({});
  console.log(allCategory);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleaddCatagory = async () => {
    if (!categoryName) {
      alert("please enter form complete");
    } else {
      const body = {
        categoryName: categoryName,
        allVideos: [],
      };
      const response = await addCategory(body);
      if (response.status === 201) {
        toast.success(`${categoryName} successfully inserted`);
        handleClose();
        setCategoryName("");
      } else {
        toast.error("something error");
      }
    }
  };
  const getCategory = async () => {
    const response = await getAllCategory();
    const { data } = response;
    console.log(data);
    setAllCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  const handleDelete = async (categoryId) => {
    const result = await deleteCategory(categoryId);
    console.log(result);
    if (result.status === 200) {
      getCategory();
    } else {
      toast.error("some thing went wrong");
    }
  };
  const videoDrop = async (e,id) => {
    console.log("====on drop===");
    console.log("category id:",id);
    //get video id that we passed form video card
    const videoid=e.dataTransfer.getData("videoID")
    console.log(`video with id ${videoid} need to put inside category with id ${id}`);
    const {data} = await getAllVideosById(videoid);
    console.log("====data details=====");
    console.log(data);
    const selectedCategory = allCategory?.find (item=>item.id===id);
    console.log("======selectedCategory=====");
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const response = await updateCategory(selectedCategory,id)
    getCategory()
    
    
    
  };
  const dragOver =async (e)=>{
    //onDragOver method will trigger page refresh so the videoID we are passing may lost
    e.preventDefault();
    console.log("==inside drag over====");
  }

  return (
    <>
      <button className="btn btn-warning" onClick={handleShow}>
        {" "}
        ADD new category
      </button>

      {allCategory?.length > 0 ? (
        allCategory.map((item) => (
          <div
            key={item.id}
            className="m-3 border border-secondary rounded p-3"
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e)=>videoDrop(e,item.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6 style={{ color: "white" }}>{item.categoryName}</h6>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item?.id)}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
            {
              item.allVideos?.length>0?
              item.allVideos?.map(card =>(
                <VideoCard displayVideo={card}/>
              ))
              
              :<p>nothing to display</p>
            }
          </div>
        ))
      ) : (
        <p>error found</p>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>
            <FontAwesomeIcon
              icon={faList}
              style={{ color: "orange" }}
            ></FontAwesomeIcon>
            <span className="textstyle"> add category</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form
            className="border border-secondary p-3 rounded"
            data-bs-theme="light"
          >
            <p className="textstyle" style={{ fontWeight: "700" }}>
              please fill the form
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter category name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={handleaddCatagory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
      ></ToastContainer>
      <ToastContainer />
    </>
  );
}

export default Category;
