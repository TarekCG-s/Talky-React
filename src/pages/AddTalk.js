import React, {Component} from 'react';
import axios from 'axios'
import Layout from '../components/Layout'
import NavigationBar from '../components/NavigationBar'
import CustomForm from '../components/CustomForm'

class AddTalk extends Component {

  render() {
    return(
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <Layout>
          <CustomForm type='post' />
        </Layout>
      </React.Fragment>
    )
  }

}
export default AddTalk;
