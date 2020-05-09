import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationDrawer from './NavigationDrawer'
import { withRouter } from 'react-router'
import { fetchMessages } from '../actions'
import Typography from '@material-ui/core/Typography'


export class ViewMessages extends Component {

    componentDidMount() {
        this.props.fetchMessages();
    }
    render() {
        const messages = this.props.messages.messagesAPI.map(messages => (
            <div key={messages.id}>
                <Typography variant="subtitle1" color="primary">{messages.subject}</Typography>
                <Typography variant="body1" color="secondary">{messages.message}</Typography>
            </div>
        ))
        return (
            <div>
                <NavigationDrawer title="View Messages" />
                {messages}
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = {
    fetchMessages
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewMessages))
