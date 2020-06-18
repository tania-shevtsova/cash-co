import React, { useRef, useEffect, useState } from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import styles from "./ResetPassword.module.css";
import {forgotPassword, forgotPasswordError} from '../../redux/actions'

const ResetPassword = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleResetEmail=(e)=>{
      setEmail(e.target.value)
  }

  const sendEmail =async (e)=>{
      e.preventDefault();
      if(email===''){
          setError(true)
      }
      else {
        try {
            const response = await axios({
              method: "POST",
              url: "http://localhost:3000/forgotPassword",
              data: email ,
            });
            props.forgotPassword(response.data)
        }
        catch(e){
            console.log(e)
        }
      }
  }

  return (
      
    <>
    {console.log(props)}
      <input
        value={email}
        onChange={handleResetEmail}
        name="email"
        type="text"
        className={styles.modalInput1}
        placeholder="Enter your email address to reset password"
      />

{error && (<><p>That email address isn't recognized. Please try again or register for a new account.</p></>)}
      <button
        className={styles.modalResetBtn}
        type="submit"
        onClick={sendEmail}
        disabled={error}
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

export default connect(mapStateToProps, {forgotPassword, forgotPasswordError})(ResetPassword);
