import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'

class Paginator extends Component {

  constructor(props){
    super(props);
    this.items = [];
    this.active = 1;
    this.pages = Math.ceil(this.props.length / 5)
    this.update_paginations();
  }

  render(){
    this.update_paginations();
    return(
        <Pagination style={this.style}>{this.items}</Pagination>
      )
  }

  // load pagination numbers when page is loaded or when page is changed
  update_paginations = () => {
    this.pages = Math.ceil(this.props.length / 5)
    this.items = [];
    for (let number = 1; number <= this.pages; number++) {
      this.items.push(
        <Pagination.Item key={number} active={number === this.active} onClick={this.updatePage.bind(this, number)} >
          {number}
        </Pagination.Item>
      );
    }
  }

  // update messages and pagination when a different page is displayed
  updatePage = (number) => {
    this.props.changePage(number);
    this.active = number;
    window.scrollTo(0, 0);
    this.update_paginations();
  }

  style = {
    justifyContent:'center',
  }
}

export default Paginator
