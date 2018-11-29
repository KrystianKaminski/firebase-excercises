import React from 'react'
import moment from 'moment'

import {List, ListItem} from 'material-ui/List';

import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'


const MessagesList = (props) => (
    <List>
        {props.messages.map(message => (
            <ListItem
                key={message.key}
                primaryText={message.text}
                secondaryText={moment(message.timeStamp).format('DD-MM-YYYY hh:mm')}
                rightIconButton={
                <IconButton
                    onClick={() => alert(message.key)}
                >
                    <DeleteIcon/>
                </IconButton>
                }
            />
        ))}
    </List>
)

export default MessagesList