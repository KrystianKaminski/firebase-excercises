import React from 'react'
import { TextField, RaisedButton } from 'material-ui';




const Input = (props) => (
    <div>
        <TextField
            value={props.text}
            onChange={props.onChange}
            type="text"
            fullWidth
        />
        <RaisedButton
             label="Add"
             onClick={props.onClick}
             secondary={true}
             fullWidth
        />
    </div>
)

export default Input