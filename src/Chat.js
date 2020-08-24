import React, { setState, useEffect } from 'react';
import 'Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';

function Chat(props) {
    const [seed, setSeed] = setState('')

    useEffect (() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return (
        <div className='chat'>

        <div className='chat__header'>
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className='chat__headerInfo'>
                <h3>Room Name</h3>
                <p>Last seen at ...</p>
            </div>

            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                     <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>               
                
            </div>
            
        </div>

        <div className='chat_body'>

        </div>

        <div className='chat_footer'>

        </div>
            
        </div>
    );
}

export default Chat;