import React from 'react'
import moment from 'moment'

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'


const MessagesList = (props) => (
    <List>
        {props.messages.map(message => (
            <ListItem
                leftAvatar={
                  <Avatar
                    src={message.author.img}
                    />
                }
                key={message.key}
                primaryText={message.text}
                secondaryText={`
                ${moment(message.timeStamp).format('DD-MM-YYYY hh:mm')}
                ${message.author.displayName || message.author.email}
                `}
                rightIconButton={
                <IconButton>
                    <DeleteIcon
                        onClick={() => props.onDeleteMessageClickHandler(message.key)}
                    />
                </IconButton>
                }
            />
        ))}
    </List>
)

export default MessagesList