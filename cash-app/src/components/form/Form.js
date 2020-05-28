import React, {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import styles from './Form.module.css';
import {registerRequest, registerSuccess, registerError} from '../../redux/actions'

const Form = (props) => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [name, setName]=useState("");

    async function register(){
        // const URL='http://localhost:3000'
        props.registerRequest();
        try{
            console.log(props)
           await axios({method: "POST", url: "http://localhost:3000/register", data: {email, password, name}}).then(res=>{console.log(res.data); props.registerSuccess(res.data)}).catch(err=>props.registerError(err))
            // const response = await axios.post(URL+'/register', {data: {email: email, password: password, name: name}});
            // console.log('response', response)
           alert('YOUre fool');
        }
        catch(error){
            console.log(error);
        }
        console.log(props)
    }

    return (
        <form className={styles.modalForm}>

    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' type='email' placeholder='Your login*' className={styles.modalInput1}/>
    <input value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type='password' className={styles.modalInput1} placeholder='Your password*'/>
    {props.formName ==='Register' && <input value={name} onChange={(e)=>setName(e.target.value)} name='name' type='text' className={styles.modalInput1} placeholder='Your name'/>}
    <button className={styles.modalSubmitBtn} type="submit" onClick={(e)=>{e.preventDefault(); register()}}>{props.formName}</button>
    </form>
    )
}

const mapStateToProps=(state)=>({
    state
})

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         registerRequest:  ()=> dispatch(registerRequest()),
//         registerSuccess: data=> dispatch(registerSuccess(data)),
//         registerError: error=> dispatch(registerError(error))
//     }
// }



export default connect(mapStateToProps, {registerRequest, registerSuccess, registerError})(withRouter((Form)));