import React from 'react'

import { database } from '../firebaseConfig'
import Input from './ChatInput'

class Chat extends React.Component {

    state = {
        newMessageText: '',
        messages: []
    }

    componentDidMount() {
        database.ref('/messages').on(
            'value',
            snapshot => this.setState({messages: snapshot.val()})
        )
    }

    handleInput = e => {
        this.setState({
            newMessageText: e.target.value
        })
    }

    handleSubmit = () => {
        database.ref('/messages').set(this.state.newMessageText)
    }

    render() {
        return (
            <div>
                <Input
                    text={this.state.newMessageText}
                    onChange={this.handleInput}
                    onClick={this.handleSubmit}
                />
            </div>
        )
    }
}

export default Chat