import React from 'react';
import styles from './FormError.module.css';

const FormError = ({formErrors}) => {
    return (
        <div className={styles.formError}>
            {console.log(formErrors)}
            {Object.keys(formErrors).map((el, i)=>{
                if(formErrors[el].length>0){
                    return (<p key={i}>{el} {formErrors[el]}</p>)
                }
                else{
                    return '';
                }
            })}
        </div>
    )
}

export default FormError;