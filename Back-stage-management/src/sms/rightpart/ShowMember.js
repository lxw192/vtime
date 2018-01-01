import React from 'react';
import { Table } from 'antd';

export default class ShowMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const columns = [{
            title: 'name',
            dataIndex: 'name',
        }, {
            title: 'mobile',
            dataIndex: 'mobile',
        }];
        const tableData = [{
            key: '1',
            name: 'John Brown',
            mobile: 33331212122,
        }, {
            key: '2',
            name: 'Jim Green',
            mobile: 31121212122,

        }];
        return <div>
            <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
            />
        </div>
    }
}