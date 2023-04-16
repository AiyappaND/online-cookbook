import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import alert from "bootstrap/js/src/alert";
function LoginScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({username, password})).unwrap();
            navigate("/profile");
        } catch (e) {
            if(e.code === "ERR_BAD_REQUEST") {
                alert("User does not exist, please sign up");
            }
            else {
                alert(e.message);
            }
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label>Username</label>
                <input className="form-control"
                       type="text" value={username}
                       onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input className="form-control"
                       type="password" value={password}
                       onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    );

}
export default LoginScreen;
