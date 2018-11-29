import React from 'react'

import { TextField, RaisedButton } from 'material-ui';

const Forms = (props) => (
    <form>
        <div>
                        <TextField
                            hintText="Email"
                            onChange={this.props.emailHandler}
                        />
                    </div>

                    <div>
                        <TextField
                            hintText="Password"
                            type="password"
                            onChange={this.props.password}
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
    </form>
)