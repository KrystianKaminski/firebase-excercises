import React from 'react'

import Forms from './Forms'


class Auth extends React.Component {

    state = {
        email: '',
        password: ''
    }


    emailHandler = e => {
        this.setState({ email: e.target.value })
    }

    passwordHandler = e => {
        this.setState({ password: e.target.value })
    }

    clickHandler = () => {
        alert('Something clicked! :o')
    }




    render() {
        return (
            <Forms
                emailHandler={this.emailHandler}
                passwordHandler={this.passwordHandler}
                onClickHandler={this.clickHandler}
                emailValue={this.state.email}
                passwordValue={this.state.passwordValue}
            />
        )
    }
}


export default Auth