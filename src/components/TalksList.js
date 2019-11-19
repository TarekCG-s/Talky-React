import React, {Component} from 'react'
import Talk from './Talk'

class TalksList extends Component {

  render(){
    return(
        this.props.posts.map((post) => (<Talk key={post.id} post={post}/>))
      )
  }
}

export default TalksList
