import React from 'react'
import Nav from './src/Nav/Nav.js';
export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <div className="main_center">
            {this.props.children}
        </div>
      </div>
    )
  }
})

