//this used to connect the commonAPI,serverurl
import {serverURL} from "./serverURL"
import {commonAPI} from "./commonAPI"

//upload video

export const uploadVideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all video

export const getAllVideos = async () =>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//delete video
export const deleteVideo = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`)
    //http://localhost:4600/videos/1
}

//add to watch history
export const addToHistory = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqBody)
}

//get all history
export const getHistory =async ()=> {
    return await commonAPI('GET',`${serverURL}/history`,{})
}
//delete history by id
export const deleteHistory= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
//add categroy
export const addCategory= async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/categroy`,reqBody)
}

//get all catagory
export const getAllCategory = async ()=>{
    return await commonAPI('GET',`${serverURL}/categroy`,"")
}

//detele catagory
export const deleteCategory = async (id)=>{
    return await commonAPI('DELETE',`${serverURL}/categroy/${id}`,{})
}
//get all video by id
export const getAllVideosById= async (id) =>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//update catagory with video details
export const updateCategory = async (data,id) =>{
    return  await commonAPI('PUT',`${serverURL}/categroy/${id}`,data)
}