import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import ConversationContainer from './Conversation/ConversationContainer'
import ThreadsContainer from "./ThreadsContainer";

const Messenger = ({ showSettings, toggleModal, match }) => (
  <div className="messenger">
    {/*// If to comment out Threads Container it will not be rendered but only /messages/:username will render when ran.*/}
    <ThreadsContainer />
    <Route path={`${match.url}/:username`} component={ConversationContainer} />
  </div>
)

Messenger.propTypes = {
  showSettings: PropTypes.func,
  newMessage: PropTypes.func,
}

export default Messenger
