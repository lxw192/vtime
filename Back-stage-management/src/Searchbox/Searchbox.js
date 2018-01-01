import React from 'react';

import "./Searchbox.less";
export default class ha extends React.Component{
   
   render(){
      return (
         <div className="searchbox">
         	<label><input type="text" placeholder="搜索成员、部门" />
         	<b className="search_background"></b></label>
         </div>
      )
   }
}