import React from 'react'

import {List, ListItem} from 'material-ui/List';

import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton'


const MessagesList = (props) => (
    <List>
        {props.messages.map(message => (
            <ListItem
                key={message.key}
                rightIconButton={<IconButton>
                    <DeleteIcon>
                        
                    </DeleteIcon>
                </IconButton>
                }
            >{message.text}
            
            </ListItem>
        ))}
    </List>
)

export default MessagesList