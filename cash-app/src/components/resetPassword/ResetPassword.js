import React, { useRef, useEffect, useState } from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import styles from "./ResetPassword.module.css";
import {forgotPassword, forgotPasswordError, forgotPasswordRequest} from '../../redux/actions'


const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleResetEmail=(e)=>{
      setEmail(e.target.value)
  }

  async function sendEmail (e){
      e.preventDefault();
      props.forgotPasswordRequest()
      if(email===''){
          setError(true)
      }
      else {
        setError(false)
        try {
             await axios({
              method: "POST",
              url: "http://localhost:3000/forgotPassword",
              data: {email}
            })
            .then(async function(res){
                await props.forgotPassword(res.data.ResponseBody.email)
                console.log('forgot', res)
            })
            return
        }
        catch(err){
            props.forgotPasswordError(err)
            console.log(err)
        }
      }
  }

  return (
      
    <>
      <input
        value={email}
        onChange={handleResetEmail}
        name="email"
        type="text"
        className={styles.modalInput1}
        placeholder="Enter your email address to reset password"
      />

{error ? (<><p style={{color: 'red'}}>That email address isn't recognized. Please try again or register for a new account.</p></>): ''}
      <button
        className={styles.modalResetBtn}
        type="submit"
        onClick={sendEmail}
        // disabled={error}
      >
        Send Password Reset Email
      </button>
      <button onClick={props.handleBack}>Back</button>
    </>
  );
};

const mapStateToProps = (state) => ({
    state,
  });

export default connect(mapStateToProps, {forgotPassword, forgotPasswordError, forgotPasswordRequest})(ResetPassword);
