// import { response } from "express";
import Emaildata from "../schema/email-schema.js";



export const addEmail = async (request,response) => {
  
  const maildata = request.body;

  const newEmailData = new Emaildata(maildata);
try {
    await newEmailData.save();
    response.status(201).json(newEmailData)
  } catch (error) {
    response.status(409).json({message :error.message})
  }
};
 

export const getMails =async(request,response)=>{
    try{
 const getmails = await Emaildata.find({})
 response.status(200).json(getmails);
    }catch(error){
        response.status(404).json({message:error.message}); 
    }
}