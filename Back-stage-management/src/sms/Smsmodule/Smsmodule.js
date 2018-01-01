import React from 'react';
import "./Smsmodule.less";
import Addpeople from '../Addpeople/Addpeople';
import Addbtn from '../Addpeople/Addbtn';
import NavLink from '../../../NavLink';
export default class Entrybtn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btn: [
                {
                    title: "添加人员",
                    tag:"add",
                    url: ""
                },
                {
                    title: "批量导入/导出",
                    tag:"importexport",
                    url: "/Importexport"
                },
                {
                    title: "团队邀请",
                    tag:"invite",
                    url: "/invite"
                },
                {
                    title: "调整排序",
                    tag:"sort",
                    url: "/sort"
                },
                {
                    title: "批量删除",
                    tag:"del",
                    url: "/del"
                }
            ]
        }
    }
    render() {
        const btn = this.state.btn;
        return < div className="Smsmodule_box" >
            {
                btn.map((item, index) => {
                    return <div className="Sms_add" key={index}>
                    {
                        item.tag =="add"?
                         <Addpeople></Addpeople>
                         :
                         null  
                    }
                        <NavLink to={`sms${item.url}`}><Addbtn typename={item.title}
                        /></NavLink></div>
                })
            }
        </div>
    }
}
