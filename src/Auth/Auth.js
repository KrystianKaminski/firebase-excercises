import React from 'react'

import { auth } from '../firebaseConfig'

import Forms from './Forms'


class Auth extends React.Component {

    state = {
        email: '',
        password: '',
        isUserLoggedIn: false
    }



    componentDidMount() {
        auth.onAuthStateChanged(
            // user is an obj with user data or null when not loggen in
            user => {
                if (user) {
                    this.setState( {isUserLoggedIn: true})
                } else {
                    this.setState({isUserLoggedIn: false})
                }
            }
        )
    }


    emailHandler = e => {
        this.setState({ email: e.target.value })
    }

    passwordHandler = e => {
        this.setState({ password: e.target.value })
    }

    onLogInClick = () => { 
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => {
                alert('Something is wrong! Check console for error details')
                console.log(error)
            })
    }

    onLogInByGoogleClick = () => {
        alert('By google')
     }



    render() {
        return (
            this.state.isUserLoggedIn ?
                this.props.children 
                :
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