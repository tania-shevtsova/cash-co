import React, {useRef, useEffect} from 'react'
import Form from '../form/Form';
import styles from './LoginModal.module.css';

const LoginModal = (props) => {
    const refs=useRef(null)
    const onClose = (e) => {
       
        props.onClose && props.onClose(e);
        document.body.style.overflow = "initial";
        document.body.style.position = "initial";
      };

      const onLayerClose=(e)=>{
        if (refs && !refs.current.contains(e.target)) {
          props.onClose && props.onClose(e);
          document.body.style.overflow = "initial";
          document.body.style.position = "initial";
        }
    }
    
    const onEscClose=(e)=>{
        if(e.keyCode===27){
            props.onClose && props.onClose(e);
            document.body.style.overflow = "initial";
            document.body.style.position = "initial";
        }
    }
    useEffect(()=>{
            window.addEventListener('keyup', onEscClose)
        return ()=>{
            window.removeEventListener('keyup', onEscClose)
        }
    });

      if (!props.isOpenLogin) {
        return null;
      } 
     
    return (
        <>
        <div className={styles.modalInfoOverlay} onClick={onLayerClose}></div>
        <div className={styles.modalInfoModal} ref={refs}>
          <div style={{ display: "none" }}>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            <svg
              onClick={onClose}
              className={styles.closeBtn}
              id="Capa_1"
              enableBackground="new 0 0 512.001 512.001"
              height="512"
              viewBox="0 0 512.001 512.001"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z" />
              </g>
            </svg>
          </div>
          <Form formName="Login" />
        </div>
      </>
    )
}

export default LoginModal;