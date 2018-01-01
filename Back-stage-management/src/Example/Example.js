import React from 'react'
import ReactDOM from 'react-dom'
import { Popover , Tooltip , Button , Modal , OverlayTrigger} from 'react-bootstrap';

import "./Example.less";
export default class Example extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
      showModal : false
    }
  }
  
 
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)} >{this.props.title.data[0]}</Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
          <Modal.Title>{this.props.title.data[0]}<span>(部门ID:49357266)</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
       

                <div className="information">
                    <span className="hint">部门信息</span>
                    <div><span><b>*</b>部门名称:</span><input type="text" /></div>
                    <div><span><b>*</b>上级部门:</span><input type="text" /></div>
                    <div><span>设置主管:</span><input type="text" /></div>
                    <div className="hidden_box">
                        <span className="hint">部门群</span>
                        <div><span>群名称:</span><input type="text" /></div>
                         <div className="annotation">群主可在群设置中修改</div>
                         <div><span>群主:</span><input type="text" /></div>
                         <div><span>群人数:</span>2人</div>
                         <div><span>包含子部门人员:</span><input type="radio" className="open" name="open" />开<input type="radio" className="open" name="open" />关</div>
                         <div className="annotation">群主可在群设置中修改</div>
                          <span className="hint">部门设置</span>
                         <div><span>隐藏部门:</span><input type="radio" className="open" name="hidden" />开<input type="radio" className="open" name="hidden" />关</div>
                         <div className="annotation">群主可在群设置中修改</div>
                          <div><span>本部门员工仅可见自己:</span><input type="radio" className="open" name="bumen" />开<input type="radio" className="open" name="bumen" />关</div>
                         <div className="annotation">群主可在群设置中修改</div>
                    </div>
                </div>


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}> 保存</Button>
            <Button onClick={this.close.bind(this)}>删除 </Button>
            <Button onClick={this.close.bind(this)}>取消 </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

