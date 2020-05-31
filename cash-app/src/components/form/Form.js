import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styles from "./Form.module.css";
import FormError from '../formError/FormError';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError
} from "../../redux/actions";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formErrors, setFormErrors]=useState({email: '', password: ''});
  const [emailValid, setEmailValid]=useState(false);
  const [passwordValid, setPasswordValid]=useState(false);
  const [nameValid, setNameValid]=useState(false);
  const [formValid, setFormValid]=useState(false);

  const onClose =  (e) => {
    props.onClose && props.onClose(e);
    document.body.style.overflow = "initial";
    document.body.style.position = "initial";
      if(props.formName === "Login"){
     login()
      }
   
     
    if (props.formName === "Register"){
     e.preventDefault();
     register()
   }

   
  };

  const handleEmailInput=(e)=>{
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    setEmail(e.target.value)
      // validateField(email, e.target.value);


      let fieldValidationErrors=formErrors;
     let emailValid1=emailValid;
     emailValid1=validEmailRegex.test(e.target.value);
     console.log('emailValid1', emailValid1)
     fieldValidationErrors.email=emailValid1 ? '' : 'is invalid';

     setFormErrors({formErrors: fieldValidationErrors});
    //  setFormValid(emailValid1);
    validateForm()
     setEmailValid(emailValid1);
  }
  const handlePasswordInput=(e)=>{
    setPassword(e.target.value)
      // validateField(password, e.target.value);



      let fieldValidationErrors=formErrors;
      let passwordValid1=passwordValid;
      passwordValid1=e.target.value.length >=6;
          fieldValidationErrors.password=passwordValid1 ? '' : 'is too short';

          setFormErrors({formErrors: fieldValidationErrors});
          // setFormValid(passwordValid1);
          validateForm()
          setPasswordValid(passwordValid1)
  }

  const handleNameInput=(e)=>{
    setName(e.target.value)
    let fieldValidationErrors=formErrors;
    let nameValid1=nameValid;
    nameValid1=e.target.value.length >=3;
    fieldValidationErrors.name=nameValid1 ? '' : 'is too short';
    setFormErrors({formErrors: fieldValidationErrors});
    validateForm()
    // setFormValid(nameValid1);
    setNameValid(nameValid1)
  }
  // const handleEmailInput=(e)=>{
  //   setEmail(e.target.value)
  // }

  // const validateField=(fieldName, value)=>{
  //   let fieldValidationErrors=formErrors;
  //   let emailValid1=emailValid;
  //   let passwordValid1=passwordValid;
  //   switch(fieldName){
  //     case 'email':
  //       emailValid1=value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  //       fieldValidationErrors.email=emailValid1 ? '' : 'is invalid';
  //       break;

  //       case 'password':
  //         passwordValid1=value.length >=6;
  //         fieldValidationErrors.password=passwordValid1 ? '' : 'is too short';
  //         break;
  //         default:
  //           break;
  //   }

  //   setFormErrors({formErrors: fieldValidationErrors, validateForm});
  //   setEmailValid(emailValid1);
  //   setPasswordValid(passwordValid1)
  // }

  const validateForm=()=>{
    setFormValid(emailValid && passwordValid && nameValid);
  }

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
    <>
    <div><FormError formErrors={formErrors}/></div>
    {console.log(formErrors)}
    <form className={styles.modalForm}>
      <input
        value={email}
        onChange={handleEmailInput}
        name="email"
        type="email"
        placeholder="Your login*"
        className={styles.modalInput1}
      />
      <input
        value={password}
        onChange={handlePasswordInput}
        name="password"
        type="password"
        className={styles.modalInput1}
        placeholder="Your password*"
      />
      {props.formName === "Register" && (
        <>
        <input
          value={name}
          onChange={handleNameInput}
          name="name"
          type="text"
          className={styles.modalInput1}
          placeholder="Your name"
        />
         <button
        className={styles.modalSubmitBtn}
        type="submit"
        onClick={onClose}
        disabled={!formValid}
      >
        {console.log('formValid', formValid)}
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
  </>
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
