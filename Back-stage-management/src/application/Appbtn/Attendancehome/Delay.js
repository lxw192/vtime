import React from "react";
// import "./Delay.less";

import { Select } from 'antd';
const Option = Select.Option;


export default class Delay extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange(value) {
       let a = value.label // { key: "lucy", label: "Lucy (101)" }
        this.props.changetimes(a)
    }

    render() {
        return (
            <Select labelInValue defaultValue={{key: '--'}} style={{width: 60}} onChange={this.handleChange.bind(this)}>
                <Option value="1">10</Option>
                <Option value="2">20</Option>
                <Option value="3">30</Option>
                <Option value="4">40</Option>
                <Option value="5">50</Option>
            </Select>
        )
    }
}
