import React from 'react'
import { TextField, RaisedButton } from 'material-ui';
import Paper from 'material-ui/Paper'


const style = {
    padding: 20,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 9999
}


const Input = (props) => (
    <div>
        <Paper
            style={style}
        >
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
        </Paper>
    </div>
)

export default Input