import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import useStateWithCallback from 'use-state-with-callback';
import { connect } from "react-redux";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import styles from "./Form.module.css";
import FormError from '../formError/FormError';
import HomePage from '../../pages/HomePage'
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
//   import PNotify_1 from "pnotify/dist/es/PNotify";
// import PNotifyMobile from "pnotify/dist/es/PNotifyMobile";
//   import '@pnotify/core/dist/BrightTheme.css';
  import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [formErrors, setFormErrors]=useState({email: '', password: '', name: ''});
  const [emailValid, setEmailValid]=useState(false);
  const [passwordValid, setPasswordValid]=useState(false);
  const [nameValid, setNameValid]=useState(false);
  const [formValid, setFormValid]=useState(false);
  const [isConflict, setIsConflict]=useState(false);

  const onClose = async (e) => {
    //  if(isConflict){
    //   console.log('isConflict11111', isConflict)
    //   return;
    // } else {
    //   console.log('hereeee')
    // props.onClose && props.onClose(e);
    // document.body.style.overflow = "initial";
    // document.body.style.position = "initial";
    
    
    // if (props.formName === "Register"){
    //   e.preventDefault();
    //   await register(e);
    // }

      
  
          //   if(props.formName === "Login"){
          //  login()
          //   }
  
   
  };
 
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


  useEffect(()=>{
    // const abort=new AbortController()
    // setTimeout(()=>{

  
    if(props.state.error!==null){
      // setTimeout(()=>{


        setIsConflict({isConflict: true})
        console.log('thiiiiis!!!', props.state.error)
      // }, 1000)
    }
  // }, 1000)
    // function a(){
    //   setIsConflict(!isConflict)
    // setTimeout(()=>{

    //   if(props.state.error === null){
    //     setIsConflict(!isConflict)
    //     console.log('hello')
    //     console.log('not null', props.state.error)
    //   }
    // }, 1000)
    // setIsConflict(!isConflict)
    // if(props.state.error !== null){
    //   setIsConflict(!isConflict)
    //   console.log('not null', props.state.error)
    // }

    // function a(){
    //    const timer = setTimeout(() => {
    //     if(props.state.error!==null){
    //         setIsConflict(!isConflict)
    //        console.log('not null', props.state.error)
    //     }
    //     // else{
    //     //   console.log(props.state.error)
    //     //    setIsConflict(isConflict)
    //     // }
        
    //   });
    //   return () =>{ clearTimeout(timer)};
      // if(props.state.error !== null && props.state.error.length>0){
      //   setIsConflict(!isConflict);
      //   console.log('not null')
      // }
      // console.log('just', props.state.error)

    
      // const timer = setTimeout(() => {
      //     setIsConflict(!isConflict)
      //     console.log('not null', props.state.error)
        
      // });
      // return () =>{ clearTimeout(timer)};

     
    
  // }
  // a()
    // return () => {abort.abort()}
    
  }, [props.state.error])

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
      //  setIsConflict(!isConflict)
       console.log('hereeee');
       console.log('isConflict11111', isConflict)
       props.onClose && props.onClose(e);
       document.body.style.overflow = "initial";
       document.body.style.position = "initial";
       props.history.replace('/')
     
    } catch (error) {
      await props.registerError(error.response.data.ResponseBody);
      console.log('now', props.state.error)
      console.log('tt', isConflict)
      if(error.response.status===409){
         alert(`${error.response.data.ResponseBody}`)
    }
      return;

//       if(props.state.error !==null) {
// console.log('true')
      
      setTimeout(()=>{

         if(error.response.status===409){
       
            // setIsConflict(!isConflict)
             alert(`${error.response.data.ResponseBody}`)
        }
    
      }, 1000)
    }
     
      //   PNotify_1.error({
      //     text: `${error.response.data.ResponseBody}`,
      //     modules: {
      //       Mobile: {
      //         swipeDismiss: true,
      //         styling: true
      //       },
      //       Desktop: {
      //         desktop: false,
      //         fallback: true,
      //     }
      //   }
      // });

      // info({
      //   title: "Button Clicked",
      //   text:
      //     "You have clicked the button. You may now complete the process of reading the notice.",
      //   modules: new Map([
      //     [
      //       Confirm,
      //       {
      //         confirm: true,
      //         buttons: [
      //           {
      //             text: "Ok",
      //             primary: true,
      //             click: notice => {
      //               notice.close();
      //             }
      //           }
      //         ]
      //       }
      //     ]
      //   ])
      // });
        // alert(`${error.response.data.ResponseBody.errors.context} is missing! `)
        
      // }
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
    {/* <div><FormError formErrors={formErrors}/></div>
    {console.log('Form', formErrors)} */}
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

// function useStateCallback(initialState) {
//   const [isConflict, setIsConflict] = useState(initialState);
//   const cbRef = useRef(null); // mutable ref to store current callback

//   const setStateCallback = (isConflict, cb) => {
//     cbRef.current = cb; // store passed callback to ref
//    setIsConflict(isConflict);
//   };

//   useEffect(() => {
//     // cb.current is `null` on initial render, so we only execute cb on state *updates*
//     if (cbRef.current) {
//       cbRef.current(isConflict);
//       cbRef.current = null; // reset callback after execution
//     }
//   }, [isConflict]);

//   return [isConflict, setStateCallback];
// }

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
