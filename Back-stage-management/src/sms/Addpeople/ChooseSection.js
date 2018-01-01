import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Modal} from 'react-bootstrap';


export default class ChooseSection extends React.Component {
  constructor(props) {
    super(props);
   
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
  checked() {
    this.setState({ check: !this.state.checked })
  }

  render() {
    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)} >添加人员</Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
   
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}


