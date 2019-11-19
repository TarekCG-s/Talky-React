import React, {Component} from 'react';
import axios from 'axios'
import Layout from '../components/Layout'
import NavigationBar from '../components/NavigationBar'
import TalksList from '../components/TalksList'
import Paginator from '../components/Paginator'

class TalksPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
      active: 1,
      length: 0,
    };
  }

  componentDidMount(){
    // Get Talks Data from si-glyph-screw-driver.
    axios.get('http://127.0.0.1:8000/api/talks/')
      .then(res => {
        this.feedback = res.data;
        this.setState({
          length:this.feedback.length,
          posts:this.feedback.slice(0,5),
        });
      });
  }

  render() {
    return(
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <Layout>
          <TalksList posts={this.state.posts}></TalksList>
          <Paginator length={this.state.length} active={this.state.active} changePage={this.changePage}></Paginator>
        </Layout>
      </React.Fragment>
    )
  }

  // Change Data displayed in page.
  changePage = (num) => {
    this.setState({
      posts:this.feedback.slice((num - 1) * 5 ,num * 5),
      active: num,
    })
  }

}
export default TalksPage;
