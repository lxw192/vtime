import React from 'react';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs.js';
export default class invite extends React.Component {
    constructor() {
        super()
        this.state = {
            typename : ["导出通讯录"]
        }
    }
    render() {
        return (
            <div className="sms_centent">
                <div className="sms_centent_title">
                    <ul className="title">
                        <li className="current">
                            <b>通讯录</b></li>
                        <li>
                            <b>外部联系人</b>
                        </li>
                    </ul>
                </div>
                <div className="sms_centent_centent">
                    <Breadcrumbs />
                </div>

            </div>
      )
   }
}
