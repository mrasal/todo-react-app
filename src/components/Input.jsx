import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <input type="text" 
     placeholder={this.props.inputPlaceholder} 
     onChange={this.props.enterEvent} 
     className="form-field"
     value=""
     />
    );
  }
}

export default Input;