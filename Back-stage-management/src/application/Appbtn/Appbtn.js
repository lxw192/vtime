import React from 'react';
import "./Appbtn.less";
import NavLink from './../../../NavLink.js';
export default class Appbtn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title:["考勤" , "签到" , "日志" , "审批" , "公告" , "客户管理"],
            explain:["说明:可以添加考勤组,设置加班规则统计考勤信息" , "说明:可查看统计签到人数","说明:可查看检索提交日志详情","说明:可建立审批流程,查看审批信息","说明:可查看历史公告,发布公告","说明:可查看外部联系人"]
		}
	}
	rotatebtn(){
		$(".btnbtn").css("transform" , "rotate(90deg)");
		$("div.lock").css("display" , "block");
	}
	render(){
		return (
			<div>
				<NavLink className="mr" to="/Attendancehome">
					<div className="appbtn_box">
						<span className="bgimg"></span>
						<span className="btntitle">{this.state.title[0]}</span>
						<span className="btnconent">{this.state.explain[0]}</span>
						<span className="btnbtn" onClick={this.rotatebtn.bind(this)}>></span>
						<div className="lock">
							<span className="off">设置</span>
							<span className="on">停用</span>
						</div>
					</div>
				</NavLink>
                <NavLink className="mr">
            	    <div className="appbtn_box">
                    	<span className="bgimg"></span>
                    	<span className="btntitle">{this.state.title[1]}</span>
                    	<span className="btnconent">{this.state.explain[1]}</span>
                    	<span className="btnbtn" onClick={this.rotatebtn.bind(this)}>></span>
                    		<div className="lock">
                    		    <span className="off">设置</span>
                    		    <span className="on">停用</span>
                    		</div>
          	 	    </div>
                </NavLink>
                <NavLink className="mr">
                    <div className="appbtn_box">
                        <span className="bgimg"></span>
                        <span className="btntitle">{this.state.title[2]}</span>
                        <span className="btnconent">{this.state.explain[2]}</span>
                        <span className="btnbtn" onClick={this.rotatebtn.bind(this)}>></span>
                        <div className="lock">
                            <span className="off">设置</span>
                            <span className="on">停用</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="mr">
                    <div className="appbtn_box">
                        <span className="bgimg"></span>
                        <span className="btntitle">{this.state.title[3]}</span>
                        <span className="btnconent">{this.state.explain[3]}</span>
                        <span className="btnbtn" onClick={this.rotatebtn.bind(this)}>></span>
                        <div className="lock">
                            <span className="off">设置</span>
                            <span className="on">停用</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="mr">
                    <div className="appbtn_box">
                        <span className="bgimg"></span>
                        <span className="btntitle">{this.state.title[4]}</span>
                        <span className="btnconent">{this.state.explain[4]}</span>
                        <span className="btnbtn" onClick={this.rotatebtn.bind(this)}>></span>
                        <div className="lock">
                            <span className="off">设置</span>
                            <span className="on">停用</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink className="mr">
                    <div className="appbtn_box">
                        <span className="bgimg"></span>
                        <span className="btntitle">{this.state.title[5]}</span>
                        <span className="btnconent">{this.state.explain[5]}</span>
                        <span className="btnbtn" onClick={this.rotatebtn.bind(this)}>></span>
                        <div className="lock">
                            <span className="off">设置</span>
                            <span className="on">停用</span>
                        </div>
                    </div>
                </NavLink>
            </div>
		)
	}
}