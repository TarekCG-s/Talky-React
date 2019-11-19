import React, {Component} from 'react';
import axios from 'axios'
import Layout from '../components/Layout'
import NavigationBar from '../components/NavigationBar'
import {Button} from 'react-bootstrap'
import Talk from '../components/Talk'
import CustomForm from '../components/CustomForm'
import {Link} from 'react-router-dom'
class TalksPage extends Component {

  state = {post:''}
  componentDidMount(){
    // Get Talks Data from si-glyph-screw-driver.
    let talkID = this.props.match.params.talkID;
    console.log(talkID);
    axios.get(`https://talky-react.herokuapp.com/api/talks/${talkID}`)
      .then(res => {
        this.feedback = res.data;
        this.setState({
          post:this.feedback,
        });
      });
  }

  render() {
    return(
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <Layout>
          <Talk post={this.state.post} />
          <h5> Update Talk </h5>
          <CustomForm id={this.props.match.params.talkID} type='update' />
          <Link to="/">Return to Main Page</Link>
        </Layout>
      </React.Fragment>
    )
  }

}
export default TalksPage;
