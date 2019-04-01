import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import ConversationContainer from './Conversation/ConversationContainer'
import ThreadsContainer from "./ThreadsContainer";

const Messenger = ({ showSettings, toggleModal }) => (
  <div className="messenger">
    <ThreadsContainer />
    <Route path={`/messages/:username`} component={ConversationContainer} />
  </div>
)

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func,
}

export default Messenger
