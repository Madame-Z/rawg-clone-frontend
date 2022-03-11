import React, { useState } from "react";
import axios from "axios";

import { Header } from "../../components/Header/Header";

import css from './Signup.module.css';

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:3001/register", {
            email: email,
            username: username,
            password: password,
        }
        ); 
    };
    
    return (
        <main>
            <Header/>
            <form onSubmit={handleSubmit}> 
                <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <input placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
                <input placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button className={css["button_signup"]} type="submit">Sign up</button>
            </form>
        </main>
    )
}

