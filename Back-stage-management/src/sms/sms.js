import React from 'react';
import { Link } from 'react-router';
// import Example from './../Example/Example.js';
//编辑部门与添加部门共用
import LeftPart from './leftpart/LeftPart';
import "./sms.less";

export default class sms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [
                {
                    title: "通讯录",
                    url: "/sms"
                },
                {
                    title: "外部联系人",
                    url: "/sms/outer"
                }
            ],
            members:[]
        }
    }
    render() {
        const nav = this.state.nav;
        let hash = window.location.hash;
        return (
            <div>
                <div className="sms_centent_title">
                    <ul className="title">
                        {
                            nav.map((item, index) => {
                                return <li key={index}><Link to={item.url}>{item.title}</Link></li>
                            })
                        }
                    </ul>
                </div>
                <div className="sms_centent">
                    <div className="sms_centent_centent">
                        {
                            hash !== "#/sms/outer" ?
                                <div className="sms_centent_left">
                                    <LeftPart></LeftPart>
                                </div>
                                :
                                null
                        }
                        <div className="sms_centent_right">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}