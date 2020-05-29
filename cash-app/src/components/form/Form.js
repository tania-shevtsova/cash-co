import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styles from "./Form.module.css";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError
} from "../../redux/actions";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  console.log(props.formName)
  const onClose = (e) => {
    props.onClose && props.onClose(e);
    document.body.style.overflow = "initial";
    document.body.style.position = "initial";
   if(props.formName === "Login" ){
    login()
   
   }    
    if (props.formName === "Register" ){
     e.preventDefault();
    register()
   }
  };

  async function register() {
    // const URL='http://localhost:3000'
    props.registerRequest();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: { email, password, name },
      })
      props.registerSuccess(response.data.ResponseBody);
    } catch (error) {
      props.registerError((error.response.data.ResponseBody.errors));
      if(error.response.status===422){
        error.response.data.ResponseBody.errors.map(el=>{console.log(el)})
        // alert(`${error.response.data.ResponseBody.errors.context} is missing! `)
        
      }
    }
  }

  async function login(e) {
    // const URL='http://localhost:3000'
    props.loginRequest();
    try {
      await axios({
        method: "PATCH",
        url: "http://localhost:3000/login",
        data: { email, password },
      })
        .then((res) => {
          props.loginSuccess(res.data.ResponseBody);
        })
        .catch((err) => {props.loginError('Wrong login or password', err)});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className={styles.modalForm}>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="email"
        type="email"
        placeholder="Your login*"
        className={styles.modalInput1}
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        type="password"
        className={styles.modalInput1}
        placeholder="Your password*"
      />
      {props.formName === "Register" && (
        <>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          className={styles.modalInput1}
          placeholder="Your name"
        />
         <button
        className={styles.modalSubmitBtn}
        type="submit"
        onClick={onClose}
      >
        {/* {props.formName} */}
        Register
      </button>
      </>
      )}
       {props.formName === "Login" && (
      <button
        className={styles.modalSubmitBtn}
        type="submit"
        onClick={onClose}
      >
        Login
        {/* {props.formName} */}
      </button>
       )}
    </form>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError
})(withRouter(Form));
