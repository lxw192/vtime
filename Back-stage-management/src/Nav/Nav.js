import React from 'react';
import NavLink from './../../NavLink.js';
import { connect } from "react-redux";
import {jia , jian} from "./../actions.js";
 class Nav extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         a : 11
      }
   }
   render(){
      return (
         < div className = "header_box" >
                  <div className = "header_center" >
                  <div className = "logo_box" >
                  <div className = "logo" > LOGO </div> </div > < div className = "nav" >
                  <ul>
                  <li><NavLink to="/" > 首页</NavLink></li >
                  <li>  <NavLink to="/sms">通讯录</NavLink></li >
                  <li>  <NavLink className="current" to="/application">企业应用</NavLink></li >
                  <li>  <NavLink  to="/enterprisedata">企业数据</NavLink></li >
                  <li>  <NavLink  to="/setup">设置</NavLink></li >
                  <li>  <NavLink  to="/">退出</NavLink></li >
                  </ul> </div> </div> </div>
      )
   }
}
export default connect(
    (state)=>{
        return {
            c : state.c
        }
    }
    ,
    (dispatch)=>{
        return {

            "jia" : () => {
                dispatch(jia());
            },
            "jian" :() => {
                dispatch(jian());
            }
        }
    }
)(Nav)