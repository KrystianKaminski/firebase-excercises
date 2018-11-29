import React from 'react'

import { database } from '../firebaseConfig'
import Input from './ChatInput'
import MessagesList from './MessagesList';

class Chat extends React.Component {

    state = {
        newMessageText: '',
        messages: []
    }

    componentDidMount() {
        database.ref('/messages').on(
            'value',
            snapshot => {
                const array = Object.entries(snapshot.val() || {}).reverse()
                const messagesList = array.map(entry => ({
                    ...entry[1],
                    key: entry[0]
                }))
                console.log(messagesList)

                this.setState( {messages: messagesList})
            }
        )
    }

    componentWillUnmount() {
        database.ref('/messages').off()
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

    onDeleteMessageClickHandler = messageKey => {
        database.ref(`/messages/${messageKey}`)
            .set(null)
            
    }



    render() {
        return (
            <div>
               <MessagesList
                    messages={this.state.messages}
                    onDeleteMessageClickHandler={this.onDeleteMessageClickHandler}
               />
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