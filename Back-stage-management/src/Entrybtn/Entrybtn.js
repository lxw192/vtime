import React from 'react';
import "./Entrybtn .less";
import NavLink from './../../NavLink.js';
export default class Entrybtn extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: {
            "type": ["通讯录管理", "企业邮箱" , "邀请短信设置" , "考勤打卡" , "公告审批" , "钉盘" , "假期管理"]
         }
      }
   }
   render() {
      return ( < div className = "entrybtn_box" >
         <NavLink to="/sms">< div className = "entrybtn" >< span > </span> < span > { this.state.data.type[0] } </span> </div></NavLink>
         <NavLink to="">< div className = "entrybtn" >< span > </span> < span > { this.state.data.type[1] } </span> </div> </NavLink>
         <NavLink to="">< div className = "entrybtn" >< span > </span> < span > { this.state.data.type[2] } </span> </div> </NavLink>
         <NavLink to="">< div className = "entrybtn" >< span > </span> < span > { this.state.data.type[3] } </span> </div> </NavLink>
         <NavLink to="">< div className = "entrybtn" > < span > </span> < span > { this.state.data.type[4]} </span> </div></NavLink>
         <NavLink to="">< div className = "entrybtn" >< span > </span> < span > { this.state.data.type[5] } </span> </div> </NavLink>
         <NavLink to="">< div className = "entrybtn" >< span > </span> < span > { this.state.data.type[6] } </span> </div></NavLink>
         </div>
      )
   }
   }
