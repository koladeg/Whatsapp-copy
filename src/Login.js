import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const[, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then( result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }
            ).catch((error) => alert(error.message))
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