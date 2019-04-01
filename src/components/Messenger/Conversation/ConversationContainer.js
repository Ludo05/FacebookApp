import React, { Component } from 'react'

import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  constructor(props) {
    super(props);
    // hint, add some state here
    this.state = {
      conversation: []
    }
  }

  componentDidMount() {
    // hint, you should fetch the threads here
    this.fetchConversation(this.props.match.params.username)
  }

  fetchConversation = (username) => {
    this.setState({
      conversation: []
    });
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api.fetchConversation(username)
        .then(messages => {
          this.setState({
            conversation: messages
          })
        })
    }, 1000)
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    //const needsToFetchUser = false;
    // const needsToFetchUser = `Hint. Now you don't need to iterate the messages array
    // to see if the username in the url is different from the username's conversation you
    // are displaying. Use the prevProps parameter and the this.props in the following condition `
    const { username } = this.props.match.params;
    const {conversation} = this.state;
    const needsToFetchUser = conversation.length && !conversation.find(({ from, to }) => (
      to === username || from === username
    ));
    if (needsToFetchUser) {
      this.fetchConversation(username)
    }
  }

  render() {
    const { match } = this.props;
    const { username } = this.props.match.params;
    console.log(this.props);
    // QUESTION 6. Do you think this is a good place to have this needsToFetchUser logic?
    // Can you please move needsToFetchUser condition to ConversationContainer.componentDidUpdate method?
    // https://reactjs.org/docs/react-component.html#componentdidupdate

  console.log(this.props);
    return (
      // hint, which component and props do you think we should return here?
      <Conversation match={match} username={username} conversation={this.state.conversation}/>
    )
  }
}

export default ConversationContainer
