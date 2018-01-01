import React from "react";

import "./Addtime.less";
import moment from 'moment';
import { TimePicker } from 'antd';
const format = 'HH:mm';
export default class Addtime extends React.Component{
    constructor(props){
        super(props)
    }
    change(time ,timeString){
        console.log(timeString)
    }
    render(){
        return (
            <div className="addtime">
                <TimePicker defaultValue={moment('00:00', format)} format={format}  onChange={this.change.bind(this)}/>
            </div>
        )
    }
}


