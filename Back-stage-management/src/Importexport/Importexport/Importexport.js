import React from 'react';
import { Breadcrumb } from 'antd';


export default class Importexport extends React.Component{
    render(){
        return (
        <Breadcrumb separator=">">
            <Breadcrumb.Item href="/sms#/sms">通讯录</Breadcrumb.Item>
            <Breadcrumb.Item href="/sms#/sms/Importexport">导入通讯录</Breadcrumb.Item>
        </Breadcrumb>
        )
    }
}
