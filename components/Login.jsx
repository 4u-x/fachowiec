import React from 'react';
import styles from "../styles/Login.module.css";

export default function Login() {
    return (
        <div className={styles.logos}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    {/* Zaktualizuj ścieżkę do obrazu zgodnie z folderem public */}
                    <img src="/images/nft.png" alt="NFT Logo" />
                </div>
                <div className="text-center mt-4 name">
                    TODO
                </div>
                <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username" />
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" />
                </div>
                <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>
            </div>
            </div>
        </div>
    );
}
