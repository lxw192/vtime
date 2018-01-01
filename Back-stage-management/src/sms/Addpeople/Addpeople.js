import React from 'react'
import ReactDOM from 'react-dom'
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';
import { Input, Select, Switch, DatePicker } from 'antd';
const Option = Select.Option;


import ChooseSection from "./ChooseSection";

import host from "../../../host";

import "./Addpeople.less";
export default class Addsubsector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      checked: true,
      data: {
        name: "",
        mobile: "",
        sids: "",
        id: "",
        job: "",
        localMobile: "",
        local: "",
        date: "",
        commit: "",
        email: "",
        show: false,
        high: false
      },
      //企业邮箱后缀
      value: "@163.com"
    }
  }
  // 点击提交  待完成 
  getInitialState() {
    return { showModal: false };
  }
  //关闭模态框
  close() {
    this.setState({ showModal: false });
  }
  //关闭模态框，并提交数据
  save() {
    const data = this.state.data;
    const postItem = ["name","mobile","sids"]
    let count = 0;
    let saveData={};
    postItem.forEach((item)=>{
      if(data[item]){
        count++;
        saveData[item]=data[item];
      }
    })
    if(count != postItem.length) return;
    const result = fetch(`${host}/structure/user/add`, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(saveData)
    }).then(data => data.json());
    console.log(result);
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  checked() {
    this.setState({ check: !this.state.checked })
  }
  //点击保存继续添加时
  //时间 不变 区域全部清空
  // 提交功能 待完成
  continueAdd() {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        name: "",
        mobile: "",
        sids: [],
        id: "",
        job: "",
        localMobile: "",
        local: "",
        commit: "",
        email: "",
        show: false,
        high: false
      }
    })
  }
  //获取内容 受控绑定 输入框,switch选择框，时间选择
  getContent(k, v) {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [k]: v
      }
    })
  }
  //企业邮箱下拉选择后缀
  handleChange(value) {
    this.setState({
      ...this.state,
      value
    })
  }
  render() {
    // 页面显示数据
    const data = [
      {
        title: "手机端显示信息",
        content: [
          {
            name: "姓名",
            tag: "name",
            need: true
          },
          {
            name: "工号",
            tag: "id",
            need: false
          }, {
            name: "手机号",
            tag: "mobile",
            need: true
          }, {
            name: "部门",
            tag: "sids",
            need: true
          }, {
            name: "职位",
            tag: "job",
            need: false
          }, {
            name: "分机号",
            tag: "localMobile",
            need: false
          }, {
            name: "办公地点",
            tag: "local",
            need: false
          }, {
            name: "入职时间",
            tag: "date",
            need: false
          }, {
            name: "备注",
            tag: "commit",
            need: false
          }
        ]
      },
      {
        title: "手机端不显示信息",
        content: [
          {
            name: "企业邮箱",
            tag: "email",
            need: false
          },
          {
            name: "号码隐藏",
            tag: "show",
            need: false
          },
          {
            name: "高管模式",
            tag: "high",
            need: false
          }
        ]
      }
    ]
    //页面button数据
    const button = [
      {
        title: "保存",
        use: "save"
      },
      {
        title: "保存并继续添加",
        use: "continue"
      },
      {
        title: "取消",
        use: "close"
      }
    ]
    // 企业邮箱后面可选后缀
    const selectAfter = (
      <Select defaultValue="@163.com" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
        <Option value="@qq.com">@qq.com</Option>
        <Option value="@163.com">@163.com</Option>
      </Select>
    )
    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)} >添加人员</Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
            <div className="infoAdd">
              <div className="addtitle">添加成员</div>
              {
                data.map((item, index) => {
                  return <div key={index}>
                    <p className="title">{item.title}</p>
                    {
                      item.content.map((item, index) => {

                        return <div
                          key={index}
                          className="additem"
                        >
                          <span className="infotitle">
                            <b>
                              {
                                item.need == true ?
                                  "*"
                                  :
                                  null
                              }
                            </b>{`${item.name} :`}
                          </span>
                          {
                            item.tag == "show" || item.tag == "high" ?
                              <div className="item">
                                <span>开</span><Switch
                                  onChange={(checked) => { this.getContent(item.tag, checked) }}
                                  checked={this.state.data[item.tag]}
                                ></Switch><span>关</span>
                              </div>
                              :
                              <div className="item">
                                {
                                  item.tag == "date" ?
                                    <DatePicker
                                      placeholder="请选择入职时间"
                                      style={{ "width": 350 }}
                                      onChange={(date, dateString) => { this.getContent("date", dateString) }}
                                    />
                                    :
                                    <Input
                                      addonAfter={item.tag == "email" ? selectAfter : null}
                                      value={this.state.data[item.tag]}
                                      style={{ "borderRadius": 10 + "px" }}
                                      onChange={(e) => { this.getContent(item.tag, e.target.value) }}
                                    />
                                }
                              </div>
                          }

                        </div>
                      })
                    }
                  </div>
                })
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            {
              button.map((item, index) => {
                if (item.use == "save") {
                  return <Button key={index} onClick={() => { this.save() }}>{item.title}</Button>
                } else if (item.use == "continue") {
                  return <Button key={index} onClick={() => { this.continueAdd() }}>{item.title}</Button>
                } else {
                  return <Button key={index} onClick={() => { this.close() }}>{item.title}</Button>
                }
              })
            }
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}


