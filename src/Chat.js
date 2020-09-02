import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat(props) {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")

    useEffect (() => {
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
              setRoomName(snapshot.data().name) 
            // console.log(snapshot)
            ))
        }
    }, [roomId])

    useEffect (() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>', input);

        setInput('');
    }
    return (
        <div className='chat'>

        <div className='chat__header'>
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className='chat__headerInfo'>
                <h3>{roomName}</h3>
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
            <p className={"chat__message"}>
            <span className='chat__name'>bro</span> 
            Hello buddy
            <span className='chat__timestamp'>yep</span>
            </p>

        </div>

        <div className='chat_footer'>
            <InsertEmoticon />
            <form>
                <input type="text" placeholder= "Type a message" value={input} 
                onChange={ e => setInput(e.target.value)}/>
                <button onClick={sendMessage}
                type='submit'>Send a message</button>
            </form>
            <MicIcon />
        </div>
            
        </div>
    );
}

export default Chat;