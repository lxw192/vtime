import React from 'react';
import "./Home.less";
import Entrybtn from "./../Entrybtn/Entrybtn.js";
export default class Home extends React.Component {
   constructor() {
      super()
   }
   render() {
      return ( < div className = "centre_box" >
         <div className = "centre" >
         <div className = "left" >
         <div className = "head_portrait_box" >
         <span> </span> < span > 企业头像 </span > </div>  < div className = "employees_numder" >
         <ul>
         <li>
         <span> 企业人数: </span> < span > 4 人 </span> </li>  <li>
         <span> 部门人数: </span > < span > 4 人 </span> </li>  <li>
         <span> 昨日使用人数: </span> < span > 4 人 </span>  </li>  </ul> </div>  </div>  <div className = "right" >
         <div className = "carousel_figure_box" >
         <div className = "carousel_figure" > 我是轮播图的位置 </div> </div > < div className = "fast_entrance_box" >
         <h2> 快速入口 </h2> <Entrybtn/>
         </div>  </div>  </div>  </div>
      )
   }
}
