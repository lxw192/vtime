import React from 'react';

import Appbtn from "./Appbtn/appbtn.js";

import "./application.less";
export default class application extends React.Component{
   
   render(){
      return (
         <div className="application">
            <div className="application_box">
               <div className="basicapplication">
                  <div className="basicapplication_title">
                      <h3>基础应用</h3>
                  </div>
                  <div className="btn_box">
                      <Appbtn></Appbtn>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}