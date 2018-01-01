import React from 'react';
export default class Addresslist extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
			<h1>我是组件   Addresslist   我有一个a  值是：{this.state.a}</h1>
			</div>
		)
	}
}