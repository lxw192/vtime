import React from 'react';
import { Transfer } from 'antd';
export default class Transfers extends React.Component{
    constructor(props){
        super()
         this.state = {
        mockData: [],
        targetKeys: [],
    }
    }
   
    componentDidMount() {
        this.getMock();
    }
    getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    }


    filterOption(inputValue, option){
        return option.description.indexOf(inputValue) > -1;
    }
    handleChange(targetKeys){
        this.setState({ targetKeys });
    }



    render(){
        return (
            <Transfer
                dataSource={this.state.mockData}
                showSearch
                filterOption={this.filterOption.bind(this)}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange.bind(this)}
                render={item => item.title}
            />
        );
    }
}
