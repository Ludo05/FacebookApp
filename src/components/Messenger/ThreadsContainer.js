import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Threads from './Threads'
import { fetchThreads } from '../../api/thread'

class ThreadsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: []
    }  }

  componentDidMount() {
    fetchThreads()
      .then(({ threads }) => {
        this.setState({ threads : threads})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const {  history, match } = this.props
    const { threads } = this.state
    console.log(this.props)
    return (
      // hint, which component and props do you think we should return here?
      <Threads history={history} match={match} threads={threads}/>

    )
  }
}

export default withRouter(ThreadsContainer)
