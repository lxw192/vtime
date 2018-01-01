import React from 'react'
import ReactDOM from 'react-dom'
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';
import { Input } from 'antd';

// 使用AddPeople.less 统一的样式
// import "./Addsubsector.less";
//添加群
// import Transfers from './../Transfers/Transfers.js';

import host from "../../../host";

export default class Addsubsector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      checked: true,
      data: {
      }
    }
  }
  getInitialState() {
    return { showModal: false };
  }
  //关闭 模态框，并提交数据
  save() {
    let count = 0;
    this.props.uidata.item[0].data.forEach((item) => {
      if (!this.state.data[item.tag]) {
        count++;
      }
    })
    if (count != 0) return;
    const token =  window.localStorage.getItem("token");
    const parent = "北京";
    console.log(token);
    let headers = new Headers();
    let formdata = new FormData();
    formdata.append("name","12sds啊");
    formdata.append("parent",8133324852804190208);
    // headers.append('Content-Type', 'application/json'); 
    headers.append('Accept', 'application/json'); 
    headers.append('Token',token); 
    // console.log(headers.get("Token"));
    fetch(`${host}/structure/add`, {
      method:"POST",
      mode:'cors',
      headers:headers,
      body:formdata
    })
    .then(response=>response.json())
    .then(json=>{
      console.log(json);
    })
    this.setState({ showModal: false });
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  checked() {
    this.setState({ check: !this.state.checked })
  }

  //表单数据获取 存入state
  getContent(k, v) {
    this.setState((state, props) => {
      return {
        ...state,
        data: {
          ...state.data,
          [k]: v
        }
      }
    })
  }
  render() {
    const { title, item, sectionId } = this.props.uidata;
    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)} >{title}</Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{title}<span>（部门ID{sectionId}）</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              item.map((item, index) => {
                return <div className="infoAdd" key={index}>
                  <p className="title">{item.title}</p>
                  {
                    item.data.map((item, index) => {
                      return <div key={index} className="additem">
                        <span className="infotitle"><b>{item.need ? "*" : null}</b>{item.k}:</span>
                        <div className="item">
                          <Input
                            value={this.state.data[item.tag]}
                            onChange={(e) => { this.getContent(item.tag, e.target.value) }}
                          ></Input>
                        </div>
                      </div>
                    })
                  }
                </div>
              })
            }
            {/* 部门群 */}
            {/* <Transfers /> */}

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={(e) => { this.save() }}> 保存</Button>
            <Button onClick={(e) => { this.close() }}>取消 </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

