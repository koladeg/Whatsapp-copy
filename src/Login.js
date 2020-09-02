import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider).then()
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://static.whatsapp.net/rsrc.php/v3/yO/r/FsWUqRoOsPu.png"
                    alt=""
                />
                <div className="login_text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
            <Button>
                Made by Kolade
            </Button>
        </div>
    );
}

export default Login;