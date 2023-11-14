// pages/auth.js
import React, { useState } from 'react';

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
        // This might involve sending a request to your backend API
    };

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                    />
                )}
                <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                />
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Sign Up' : 'Login'}
            </button>
        </div>
    );
}
