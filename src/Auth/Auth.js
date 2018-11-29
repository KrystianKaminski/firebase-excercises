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

    onLogInClick = () => { 
        alert('By normal')
    }

    onLogInByGoogleClick = () => {
        alert('By google')
     }



    render() {
        return (
            <Forms
                emailHandler={this.emailHandler}
                passwordHandler={this.passwordHandler}
                onLogIn={this.onLogInClick}
                onLogGoogle={this.onLogInByGoogleClick}
                emailValue={this.state.email}
                passwordValue={this.state.password}
            />
        )
    }
}


export default Auth