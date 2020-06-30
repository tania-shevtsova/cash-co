import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { success, defaultModules } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from '@pnotify/mobile';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  margin: 0 auto !important;
  display: block;
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`;

const Verify = (props) => {
    const [isConfirming, setConfirming]=useState(true);

    useEffect(() => {
        async function a (){
          let regex=/\/([1-9]\d*|0\d+)/;
    
          if(props.location.pathname.match(regex[0])){
            await axios({
             method: "GET",
             url: `http://localhost:3000${props.location.pathname}`
           }).then(function(data){setConfirming(false); 
             success({
             title: false,
             delay: 10000,
             text: "Email is verified",
             modules: new Map([
               ...defaultModules,
               [
                 PNotifyMobile,
                 {
                   swipeDismiss: true,
                 },
               ],
             ]),
           });
        })
           
         }
       return;
          
        }
        a()
      }, []);
    return (
        <>
        {isConfirming &&
            <BeatLoader
            css={override}
            size={50}
            color={"yellow"}
            loading={isConfirming}/>}
              </>
    )
}

export default Verify;