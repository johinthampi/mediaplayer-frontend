//what data is requested to database
import axios from "axios"

export const commonAPI =async (httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url:url,
        data:reqBody,
        Headers:{
            "Content-Type":"application/json" //this used for what type of data
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result;
    
    }).catch((err)=>{
        return err
    })
}
