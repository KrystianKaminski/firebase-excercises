import React from 'react'

import { TextField, RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper'

const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    margin: 20
}

class Auth extends React.Component {

    state = {
        email: '',
        password: ''
      }
    
    
      emailHandler = e => {
        this.setState({email: e.target.value})
      }
    
     passwordHandler = e => {
        this.setState({password: e.target.value})
      }
    




    render() {
        return (
            <div>
                <Paper
                    style={style}
                >
                    <div>
                        <TextField
                            name="email"
                            type="email"
                            floatingLabelText="E-Mail"
                            fullWidth
                            onChange={this.emailHandler}
                        />
                    </div>

                    <div>
                        <TextField
                            floatingLabelText="Password"
                            type="password"
                            onChange={this.passwordHandler}
                            fullWidth
                        />
                    </div>
                    <RaisedButton
                        label="Login"
                        primary={true}
                        onClick={this.onClickHandler}
                        fullWidth
                    />
                    <RaisedButton
                        label="Login by Google"
                        onClick={this.onClickHandler}
                        fullWidth
                    />
                </Paper>
            </div>
        )
    }
}


export default Auth