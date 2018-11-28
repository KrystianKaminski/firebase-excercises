import React from 'react'

import Input from './ChatInput'

class Chat extends React.Component {

    state = {
        newMessageText: '',
        messages: []
    }

    handleInput = e => {
        this.setState({
            newMessageText: e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            messages: this.state.newMessageText
        })
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