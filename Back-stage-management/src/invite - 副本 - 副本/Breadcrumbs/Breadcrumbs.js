import React from 'react';
import { Breadcrumb } from 'antd';


export default class Breadcrumbs extends React.Component{
    render(){
        return (
        <Breadcrumb separator=">">
            <Breadcrumb.Item href="/sms#/sms">通讯录</Breadcrumb.Item>
            <Breadcrumb.Item href="/sms#/invite">团队邀请</Breadcrumb.Item>
        </Breadcrumb>
        )
    }
}
