import React from 'react'
import Form from '../form/Form';
import styles from './LoginModal.module.css';

const LoginModal = () => {
    return (
        // <div className={styles.modal-info__overlay}>
        //   <div className={styles.modal-info__modal}></div>
        <Form formName='Login'/>
    //   </div>
    )
}

export default LoginModal;