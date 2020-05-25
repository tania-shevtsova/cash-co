import React from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    return (
    <form className={styles.modalForm}>
    <input name='email' type='email' placeholder='Your login*' className={styles.modalInput1}/>
    <input name='password' type='text' className={styles.modalInput1} placeholder='Your password*'/>
    {props.formName ==='Register' && <input name='name' type='text' className={styles.modalInput1} placeholder='Your name'/>}
    <button className={styles.modalSubmitBtn} type="submit">{props.formName}</button>
    </form>
    )
}

export default Form;