import React from 'react'

class Counter extends React.Component {

    state = {
        value: this.props.initialValue || 0
    }

    incHandler = () => {
        this.setState({value: this.state.value + 1})
        let newValue = this.state.value + 1
        fetch('https://krystian-kaminski.firebaseio.com/counter.json', {
            method: 'PUT',
            body: JSON.stringify(newValue)
        })
    }
    decHandler = () =>  {
        this.setState({value: this.state.value - 1})
        let newValue = this.state.value - 1
        fetch('https://krystian-kaminski.firebaseio.com/counter.json', {
            method: 'PUT',
            body: JSON.stringify(newValue)
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button
                    onClick={this.incHandler}
                >
                +
                </button>
                <button
                    onClick={this.decHandler}
                >-
                </button>
            </div>
        )
    }
}

export default Counter