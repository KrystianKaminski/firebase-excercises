import React from 'react'
import { database } from './firebaseConfig'

class Counter extends React.Component {

    state = {
        value: this.props.initialValue || 0
    }

    componentDidMount() {
        database.ref('/counter').on(
            'value',
            snapshot => this.setState({value: snapshot.val()})
        )
    }

    incHandler = () => this.setState({value: this.state.value + 1})

    decHandler = () => this.setState({value: this.state.value - 1})

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