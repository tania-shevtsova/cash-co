import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import styles from './ResetComponent.module.css';
import { success, defaultModules, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from '@pnotify/mobile';

const ResetComponent = (props) => {
    // const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [update, setUpdate]=useState(false);
    const [isLoading, setLoading]=useState(true);
    const [error, setError]=useState(false);

    useEffect(()=>{
        async function a(){
            try{
            await axios({
                method: "GET",
                url: "http://localhost:3000/reset",
                params: {
                    resetPasswordToken: props.match.params.token
                }
              })
              .then(res=>{
                  if(res.data.message==='password reset link OK'){
                      setUpdate(false)
                      setLoading(false)
                      setError(false)
                  }
                  else {
                    setUpdate(false)
                    setLoading(false)
                    setError(true)
                    error({
                        title: false,
                        delay: 10000,
                        text: "Error",
                        modules: new Map([
                          ...defaultModules,
                          [
                            PNotifyMobile,
                            {
                              swipeDismiss: true,
                            },
                          ],
                        ]),
                      })
                  }
              })
            }
            catch(err){
                console.log(err)
            }
        }
        a()
    })

    const handleChange=async(e)=>{
        setPassword(e.target.value)
    }

    const updatePassword=async(e)=>{
        e.preventDefault();

        let token= props.match.params.token
        try{
            await axios({
                method: "PUT",
                url: "http://localhost:3000/updatePasswordViaEmail",
                data: {password, token},
                // params: {
                //     resetPasswordToken: props.match.params.token
                // }
              }) 
              .then(res=>{
                  console.log(res.data)
                  if(res.data.message==='password updated'){
                      setUpdate(true);
                      setError(false)
                      success({
                        title: false,
                        delay: 10000,
                        text: "Password is updated!",
                        modules: new Map([
                          ...defaultModules,
                          [
                            PNotifyMobile,
                            {
                              swipeDismiss: true,
                            },
                          ],
                        ]),
                      })
                  }
                  else
                  {
                    setUpdate(false);
                    setError(true) 
                    error({
                        title: false,
                        delay: 10000,
                        text: "Error",
                        modules: new Map([
                          ...defaultModules,
                          [
                            PNotifyMobile,
                            {
                              swipeDismiss: true,
                            },
                          ],
                        ]),
                      })
                  }
              })
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <>
       
        <form className={styles.formReset}>
             <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className={styles.modalInput1}
          placeholder="Your password*"
        />
         <button
            className={styles.modalSubmitBtn}
            type="submit"
            onClick={updatePassword}
          >
            Update password
          </button>
        </form>
        </>
    )
}

export default withRouter(ResetComponent);
