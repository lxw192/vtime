import React from 'react';

import Addsubsector from '../Addsubsector/Addsubsector';
import Smsmodule from '../Smsmodule/Smsmodule';
import ShowMember from './ShowMember';

export default class RightPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: {
                data: ["编辑部门", "添加子部门"],
                dataname: ["部门名称", "上级部门"]
            },
            addChildSection: {
                title: "添加子部门",
                sectionId: 49357266,
                item: [
                    {
                        title: "部门信息",
                        data: [
                            {
                                k: "角色名称",
                                tag: "name",
                                need: true
                            }, {
                                k: "上级部门",
                                tag: "parent",
                                need: true
                            }
                        ]
                    }
                ]
            },
            editorSection: {
                title: "编辑部门",
                sectionId: 49357266,
                item: [
                    {
                        title: "部门信息",
                        data: [
                            {
                                k: "部门名称",
                                tag: "name",
                                need: true
                            }, {
                                k: "上级部门",
                                tag: "parent",
                                need: true
                            }, {
                                k: "设置主管",
                                tag: "boss",
                                need: false
                            }
                        ]
                    }
                ]
            }
        }
    }
    render() {
        return <div>
            <div className="sms_centent_right_title">
                <div>XX科技</div>
                <div className="feature">
                    <Addsubsector
                        uidata={this.state.editorSection}
                        title="editorSection"
                    ></Addsubsector> |<Addsubsector
                        uidata={this.state.addChildSection}
                        title="addChildSection"
                    ></Addsubsector>
                </div>
            </div>
            <div className="sms_centent_right_center">
                <div className="icon_box">
                    <span><img src="./../../images/icon.png" /></span>
                    <span>当前部门无任何人员</span>
                </div>
                <div>
                    <Smsmodule />
                </div>
                <div className="table">
                    <ShowMember></ShowMember>
                </div>
            </div>
        </div>
    }
}