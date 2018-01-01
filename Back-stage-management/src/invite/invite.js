import React from 'react';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs.js';
import { Table } from 'antd';
export default class invite extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        const data = [
            {
                title: "通过连接邀请",
                tag: "connect",
                content: "以后咱们企业工作沟通用Vtime，让生活回归生活，工作回归工作",
                href: "http://**********.dsdewq.w.we.js"
            },
            {
                title: "团队二维码",
                tag: "ma",
                img: "",
                commit: "右键复制或者下载此二维码，发送给好友"
            },
            {
                title: "申请人列表",
                tag: "item"
            }
        ]
        const columns = [{
            // title: 'Name',
            dataIndex: 'name',
        }, {
            // title: 'Age',
            dataIndex: 'age',
        }, {
            // title: 'Address',
            dataIndex: 'address',
        }];
        const tableData = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        return (
            <div className="sms_invite">
                {
                    data.map((item, index) => {
                        return <div key={index}>
                            <div className="title">{item.title}</div>
                            {
                                new Array(1).fill(1).map((item1, index1) => {
                                    if (item.tag == "connect") {
                                        return <div key="a" className="content_connect">
                                            <span>{item.content}</span>
                                            <a href="javascript:void(0)">{item.href}</a>
                                        </div>
                                    } else if (item.tag == "ma") {
                                        return <div key="b" className="content_ma">
                                            <img src={item.img} />
                                            <span>{item.commit}</span>
                                        </div>
                                    } else {
                                        return <div key="c" className="content-item">
                                            <Table 
                                            columns={columns} 
                                            dataSource={tableData}
                                            pagination={false}
                                            />
                                        </div>
                                    }
                                })
                            }
                        </div>
                    })
                }
            </div>
        )
    }
}
