import React, { useState, useEffect } from "react";
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
import { error, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from '@pnotify/mobile';

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formErrors, setFormErrors]=useState({email: '', password: '', name: ''});
  const [emailValid, setEmailValid]=useState(false);
  const [passwordValid, setPasswordValid]=useState(false);
  const [nameValid, setNameValid]=useState(false);
  const [formValid, setFormValid]=useState(false);
 
  const handleEmailInput=(e)=>{
  //   const validEmailRegex = 
  // RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    setEmail(e.target.value)
    validateField(email, e.target.value)
      // validateField(email, e.target.value);


    //   let fieldValidationErrors=formErrors;
    //  let emailValid1=emailValid;
    //  emailValid1=validEmailRegex.test(e.target.value);
    //  console.log('emailValid1', emailValid1)
    //  fieldValidationErrors.email=emailValid1 ? '' : 'is invalid';

    //  setFormErrors({formErrors: fieldValidationErrors});
    // //  setFormValid(emailValid1);
    // validateForm()
    //  setEmailValid(emailValid1);
  }
  const handlePasswordInput=(e)=>{
    setPassword(e.target.value)
      // validateField(password, e.target.value);

      validateField(password, e.target.value)

      // let fieldValidationErrors=formErrors;
      // let passwordValid1=passwordValid;
      // passwordValid1=e.target.value.length >=6;
      //     fieldValidationErrors.password=passwordValid1 ? '' : 'is too short';

      //     setFormErrors({formErrors: fieldValidationErrors});
      //     // setFormValid(passwordValid1);
      //     validateForm()
      //     setPasswordValid(passwordValid1)
  }

  const handleNameInput=(e)=>{
    setName(e.target.value)
    // let fieldValidationErrors=formErrors;
    // let nameValid1=nameValid;
    // nameValid1=e.target.value.length >=3;
    // fieldValidationErrors.name=nameValid1 ? '' : 'is too short';
    // setFormErrors({formErrors: fieldValidationErrors});
    // validateForm()
validateField(name, e.target.value)


    // setFormValid(nameValid1);
    // setNameValid(nameValid1)
  }
  // const handleEmailInput=(e)=>{
  //   setEmail(e.target.value)
  // }

  const validateField=(fieldName, value)=>{
    let fieldValidationErrors=formErrors;
    let emailValid1=emailValid;
    let passwordValid1=passwordValid;
    let nameValid1=nameValid;
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    switch(fieldName){
      case email:
        emailValid1=validEmailRegex.test(value);
        fieldValidationErrors.email=emailValid1 ? '' : `Email is invalid`;
        break;

        case password:
          passwordValid1=value.length >=6;
          fieldValidationErrors.password=passwordValid1 ? '' : `Password is too short`;
          break;

          case name:
            
    nameValid1=value.length >=3;
    fieldValidationErrors.name=nameValid1 ? '' : `Name is too short`;
    break;
          default:
            break;


    }

    setFormErrors({formErrors: fieldValidationErrors});
    setFormValid(emailValid && passwordValid && nameValid);
    setEmailValid(emailValid1);
    setPasswordValid(passwordValid1);
    setNameValid(nameValid1)
  }

  // const validateForm=()=>{
  //   setFormValid(emailValid && passwordValid && nameValid);
  // }

  async function register(e) {
    // const URL='http://localhost:3000'
    e.preventDefault();
    props.registerRequest();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: { email, password, name },
      })
      props.registerSuccess(response.data.ResponseBody);
      console.log('USER2', response.data)
       props.onClose && props.onClose(e);
       document.body.style.overflow = "initial";
       document.body.style.position = "initial";
       return 
     
    } catch (err) {
      await props.registerError(err.response.data.ResponseBody);
      if(err.response.status===409){
        error({
          title: false,
          delay: 3000,
          text:
            `${err.response.data.ResponseBody}`,
            modules: new Map([
              ...defaultModules,
              [PNotifyMobile, {
                swipeDismiss: true
              }]
            ])
        });
    }
      return;
    }
    
    }

    useEffect(() => {
      function a(){
        if(props.state.user !== null && props.state.user.registered){
          console.log('hey')
        }
      }
      a()
    }, [props.state.user])
  
  
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
    <form className={styles.modalForm}>
      <input
        value={email}
        onChange={handleEmailInput}
        name="email"
        type="email"
        placeholder="Your login*"
        className={styles.modalInput1}
      />
      {Object.keys(formErrors).map((el, i)=>{
       return (<p style={{position: 'absolute', zIndex: '999999999999999999999 !important', color: 'red'}} key={i}>{formErrors[el].email}</p>)})}
      <input
        value={password}
        onChange={handlePasswordInput}
        name="password"
        type="password"
        className={styles.modalInput1}
        placeholder="Your password*"
      />
      {Object.keys(formErrors).map((el, i)=>{
       return (<p style={{position: 'absolute', zIndex: '999999999999999999999 !important', color: 'red'}} key={i}>{formErrors[el].password}</p>)})}
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
        {Object.keys(formErrors).map((el, i)=>{
       return (<p style={{position: 'absolute', zIndex: '999999999999999999999 !important', color: 'red'}} key={i}>{formErrors[el].name}</p>)})}
         <button
        className={styles.modalSubmitBtn}
        type="submit"
        onClick={register}
        disabled={!formValid}
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
        onClick={login}
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
