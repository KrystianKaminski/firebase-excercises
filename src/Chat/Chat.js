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
            snapshot => {
                const array = Object.entries(snapshot.val())
                console.log(array)
                const messagesList = array.map(message => message[1])

                this.setState( {messages: messagesList})
            }
        )
    }

    handleInput = e => {
        this.setState({
            newMessageText: e.target.value,
        })
    }

    handleSubmit = () => {
        database.ref('/messages').push({
            text: this.state.newMessageText,
            timeStamp: Date.now()
        })
        this.setState( {newMessageText: ''})
    }

    render() {
        return (
            <div>
                <Input
                    text={this.state.newMessageText}
                    onChange={this.handleInput}
                    onClick={this.handleSubmit}
                />
                <div>
                    {this.state.messages.map(message => (
                        <div>{message.text}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Chat