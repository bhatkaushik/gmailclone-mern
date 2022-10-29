import { CloseOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
// import { useForm } from "react-hook-form";

import React from "react";
import "./SendMail.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../../features/mailSlice";
import { useState } from "react";
import { addSentEmailData } from "../../../service/api";
const defaultValue ={
  To :'',
  Subject:'',
  Message: "",
}


const SendMail = () => {
  const dispatch = useDispatch();

  const[sendmailData, setSendMaildata] =useState(defaultValue);
  
  const onValueChange =(e)=>{
    // console.log(e.target.name,e.target.value)
    setSendMaildata({...sendmailData,[e.target.name]:e.target.value })
  }

  const onSubmit = async () => {
    await addSentEmailData(sendmailData);

  dispatch(closeSendMessage());
  }

  
  return (
    <div className="SendMail">
      <div className="sendmail-header">
        <h3>new Message</h3>
        <CloseOutlined onClick={()=> dispatch(closeSendMessage())} className="sendmail-close" />
      </div>

      <form >
        <input
        name="To"
          placeholder="To"
          type="text"
          onChange={(e)=> onValueChange(e)}
          // {...register("to", { required: true })}
        />
        {/* {errors.to && <p className="sendmail-error">To is required</p>} */}
        <input
        name="Subject"
          placeholder="Subject"
          type="text"
          onChange={(e)=> onValueChange(e)}
          // {...register("Subject", { required: true })}
        />
        {/* {errors.Subject && (
          <p className="sendmail-error">Subject is required</p>
        )} */}
        <input
        name="Message"
          placeholder="Message..."
          type="text"
          onChange={(e)=> onValueChange(e)}
          // {...register("Message", { required: true })}
          className="sendmail-message"
        />
        {/* {errors.Message && (
          <p className="sendmail-error">Message is required</p>
        )} */}
        <div className="sendmail-options">
          <Button
          onClick={()=> onSubmit()}
            className="sendmail-send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }
