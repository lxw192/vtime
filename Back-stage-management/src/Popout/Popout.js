import React from 'react'
import { Modal, Button } from 'antd';
import "./Popout.less";

class Popout extends React.Component {
   constructor() {
      super();
      this.state = {
         visible: false
      }
   }

   showModal() {
      this.setState({
         visible: true
      });
   }
   handleOk(e) {
      console.log(e);
      this.setState({
         visible: false
      });
   }
   handleCancel(e) {
      console.log(e);
      this.setState({
         visible: false
      });
   }
   render() {
      return ( < div >
              <Button type = "primary" onClick = { this.showModal.bind(this) } > 编辑部门 </Button>
              <Modal title = "编辑部门" visible = { this.state.visible } onOk = { this.handleOk.bind(this) } onCancel = { this.handleCancel.bind(this) }>
                  <div className="information">
                      <span className="hint">部门信息</span>
                      <div><span>部门名称:</span><input type="text" /></div>
                      <div><span>上级部门:</span><input type="text" /></div>
                      <div><span>设置主管:</span><input type="text" /></div>
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
                  <button className="del">删除</button>
              </Modal>
          </div>
      );
   }
}

