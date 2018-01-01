import React from 'react'
import ReactDOM from 'react-dom'
import { Popover , Tooltip , Button , Modal , OverlayTrigger} from 'react-bootstrap';



// import "./Addpeople.less";
export default class Addsubsector extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
      showModal : false,
      checked:true
    }
  }
  componentDidMount() {
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
  checked(){
    this.setState({ check : !this.state.checked})
  }
  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div className="cl">
        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)} >{this.props.typename}</Button>
    
      </div>
    )
  }
}
