import React from 'react';
import styles from './FormError.module.css';

const FormError = ({formErrors}) => {
    return (
        <div className={styles.formError}>
            {Object.keys(formErrors).map((el, i)=>{
                console.log('EL', formErrors[el].length)
            
                if(formErrors[el].length>0){
                    return (<p key={i} style={{color: 'green'}}>{el} formErrors[el]</p>)
                }
                else{
                    return '';
                }
            })}
        </div>
    )
}

export default FormError;