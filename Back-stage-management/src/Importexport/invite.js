import React from 'react';
import Importexport from './Importexport/Importexport.js';
import Doload from './Doload/Doload.js';
import { Link } from 'react-router'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


import './invite.less';
export default class invite extends React.Component {
    constructor() {
        super()
        this.state = {
            typename: ["导出通讯录"],
        }
    }
    callback(key){

    }
    render() {
        const data = [
            {
                title: "温馨提示",
                content: [
                    {
                        title: '如果需要修改员工信息类别,请点击"设置-通讯录信息"进行设置'
                    },
                    {
                        title: '到入会覆盖原有员工的信息,如需更新已存在的员工,请先导出通讯录,在导出表格里进行修改'
                    },
                    {
                        title: '子账号仅能上传和导出有权限范围的通信录信息'
                    },
                    {
                        title: '我们会自动给未使用的成员发送邀请短信设置短信模板'
                    }
                ]
            }
        ]
        const tagData = [
            {
                title:"新建通讯录",
                tag:"new",
                key:"1"
            },
            {
                title: "导出/修改通讯录",
                tag:"change",
                key: "2"
            }
        ]
        return (
            <div className="sms_centent">
                <div className="sms_centent_centent centent">
                    <Importexport />

                    <div className="inport_box">
                        <div className="import">
                            {
                                data.map((item, index) => {
                                    return <div key={index}>
                                        <div className="text">{item.title}</div>
                                        <div className="conent">
                                            {
                                                item.content.map((item, index) => {
                                                    return <p key={index}>{`${index+1}：${item.title}`}</p>
                                                })
                                            }
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="btnn">
                        <Tabs onChange={this.callback} type="card">
                        {
                            tagData.map((item,index)=>{
                                    return <TabPane 
                                    tab={item.title} 
                                    key={item.key}
                                    >
                                    {
                                        item.tag == "new"?
                                        <Doload />
                                        :
                                        "我是导出页面"
                                    }
                                    </TabPane>
                            })
                        }
                        </Tabs>
                    </div>
                    
                </div>

            </div>
        )
    }
}
