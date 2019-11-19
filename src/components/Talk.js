import React, {Component} from 'react'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
class Talk extends Component {
  link = `/${this.props.post.id}`;
  style = {
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
    margin:'10px',
  }
  render(){
    return(
      <div className="wrapper">
      <Card >
        <Card.Header>name</Card.Header>
        <Card.Body>
          <Card.Title><Link to={this.link}>{this.props.post.title}</Link></Card.Title>
          <Card.Text>
            {this.props.post.message}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Talk
