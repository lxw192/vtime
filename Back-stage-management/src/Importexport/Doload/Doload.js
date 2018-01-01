import React from 'react';
import './Doload.less';
export default class Doload extends React.Component{
    downflie(){
        window.location.href = "./../../../数享科技-通讯录模板 (1).xls";
    }
    click(){
       $(".clcl").click()
    }
    render(){
        // const token = window.loacalStorage.getItem("token");
        // console.log(token);
        const data = {
            first:"下载员工通讯录模板,批量填写员工信息",
            second: "上传填好的员工信息表",
            three:"自动根据部门创建部门群",
            btn:"上传"
        }
        return <div className="undownload_box">
               <div><span>{data.first}</span><input type="button" value="下载" onClick={this.downflie.bind(this)}/></div>
               <div><span>{data.second}</span>
                   <input type="file" className="clcl"/></div>
               <span className="dj" onClick={this.click.bind(this)}>选择文件</span>
               <div><input type="checkbox"/><span>{data.three}</span></div>
               <div><button type="submit">{data.btn}</button></div>
           </div>
    }
}