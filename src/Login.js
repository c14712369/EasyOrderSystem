import React, { useState } from "react";
import "./css/Login.css";
import Menu from './Menu';

function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Mode, setMode] = useState(true);

    function Login(e) {
        e.preventDefault();

        // 模擬登入成功
        setIsLoggedIn(true);
    }

    return (
        <div>
            {!isLoggedIn && (
                <div className="container">
                    <div className="left"></div>
                    <div className="right">
                        <div className="form-actions">
                            <button type="submit" className="loading" style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
                                onClick={(e) => {
                                    setMode(true)
                                }}>
                                登入
                            </button>
                            <button type="submit" className="loading" style={{ borderLeft: "1px solid #000", borderRadius: "0 0.5rem 0.5rem 0" }}
                                onClick={(e) => {
                                    setMode(false)
                                }}>
                                註冊
                            </button>
                        </div>
                        {Mode ?
                            <form onSubmit={Login}>
                                <div className="form-control">
                                    <label for="email">帳號</label>
                                    <input type="" id="account" name="account" placeholder="請輸入您的帳號" required />
                                </div>
                                <div className="form-control">
                                    <label for="password">密碼</label>
                                    <input type="password" id="password" name="password" placeholder="請輸入您的密碼" required />
                                </div>
                                <button type="submit" className="loading">登入</button>
                                <div className="forgot">
                                    <span>忘記密碼？</span>
                                    <span>未收到驗證信？</span>
                                </div>
                                <div className="login-option">
                                    <button className="methodBtn" type="button">Google帳號登入</button>
                                    <button className="methodBtn" type="button">Facebook帳號登入</button>
                                    <button className="methodBtn" type="button">連接Apple ID</button>
                                </div>
                            </form>
                            :
                            <form onSubmit={Login}>
                                <div className="form-control">
                                    <label for="email">帳號</label>
                                    <input type="" id="account" name="account" placeholder="請輸入您的帳號" required />
                                </div>
                                <div className="form-control">
                                    <label for="password">密碼</label>
                                    <input type="password" id="password" name="password" placeholder="請輸入您的密碼" required />
                                </div>
                                <div className="form-control">
                                    <label for="email">電子信箱</label>
                                    <input type="email" id="email" name="email" placeholder="請輸入您的電子信箱" required />
                                </div>
                                <div className="form-control">
                                    <label for="email">地址</label>
                                    <input type="" id="account" name="account" placeholder="請輸入您的帳號" required />
                                </div>
                                <div className="form-control">
                                    <label for="email">電話</label>
                                    <input type="" id="account" name="account" placeholder="請輸入您的帳號" required />
                                </div>
                                <button type="submit" className="loading">註冊</button>
                            </form>
                        }
                        <div className="policy">
                            <span>註冊/登入即代表您同意遵守</span>
                            <a href="/" className="policyName">Yes123點餐系統 使用協議</a>
                        </div>
                    </div>
                </div>
            )
            }
            {isLoggedIn && <Menu />}
        </div >
    );
}

export default Login;