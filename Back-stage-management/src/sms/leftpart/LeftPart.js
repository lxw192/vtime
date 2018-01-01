import React from 'react';
import {connect} from "react-redux";
import { Tree, Input, Icon } from 'antd';
import host from '../../../host';
const TreeNode = Tree.TreeNode;

class LeftPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null,
            treeData: []
        }
    }
    //如果children 下 has_child 为true，然后 修改该函数 根据 sid请求数据
    onLoadData(treeNode) {
        // const token = window.localStorage.getItem("token");
        // return new Promise(async (resolve) => {
        //     if (treeNode.props.children || treeNode.props.sid) {
        //         resolve();
        //         return;
        //     }
        //     let headers = new Headers();
        //     headers.append('Accept', 'application/json');
        //     headers.append('Token', token);
        //     await fetch(`${host}/structure/next`, {
        //         method: "GET",
        //         mode: 'cors',
        //         headers
        //     })
        //         .then(response => response.json())
        //         .then(json => {
        //             console.log(json);
        //             if (json.code == 0) {
        //                 treeNode.props.dataRef.children = json.data.members.map((item, index) => {
        //                     return {
        //                         title: `${item.name}`,
        //                         key: `${item.name}${index}`,
        //                         children: json.data.children.map((item, index) => {
        //                             return {
        //                                 title: item.name,
        //                                 key: `${item.name}${index}`,
        //                                 children: item.has_child ? [] : null,
        //                                 sid: item.sid
        //                             }
        //                         })
        //                     }
        //                 })
        //             }
        //         })
        //     await this.setState({
        //         treeData: [...this.state.treeData],
        //     });
        //     resolve();
        // });
    }
    componentDidMount() {
        const token = window.localStorage.getItem("token");
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Token', token);
        return new Promise(async (resolve) => {
            await fetch(`${host}/structure/next`, {
                method: "GET",
                mode: 'cors',
                headers
            })
                .then(response => response.json())
                .then(json => {
                    // console.log(json);
                    if (json.code == 0) {
                        let treeData = json.data.members.map((item, index1) => {
                            return {
                                title: `${item.name}`,
                                key: `${index1}`,
                                children: json.data.children.map((item, index2) => {
                                    return {
                                        title: item.name,
                                        key: `${index1}-${index2}`,
                                        children: item.has_child ? [] : null,
                                        sid: item.sid
                                    }
                                }),
                                members:json.data.members
                            }
                        })
                        this.setState((state) => ({ ...state, treeData }));
                    }
                })
        })
    }
    renderTreeNodes(data) {
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} dataRef={item} />;
        });
    }
    selectd(key, e) {
        //从e中得到members数据
       let members =  e.node.props.dataRef.members;
        // this.props.setMember(members);
    }
    render() {
        return <div>
            <Input
                prefix={<Icon type="search" />}
                style={{ width: 80 + "%", marginLeft: 14 }}
                value={this.state.search}
                onChange={(e) => { this.setState({ ...this.state, search: e.target.value }) }}
            ></Input>
            <Tree
                // loadData={this.onLoadData.bind(this)}
                onSelect={(selectedKeys, e) => { this.selectd(selectedKeys, e) }}
            >
                {this.renderTreeNodes(this.state.treeData)}
            </Tree>
        </div>
    }
}
export default connect()(LeftPart);