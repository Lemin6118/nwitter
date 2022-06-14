import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState("");
    const [error, setError] = useState("");

    const onChange = (event) => {
        console.log(event.target.name);
        const {
            target : {name, value},
        } = event;
        if(name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = async (event) =>{
        event.preventDefault();
        try{
            let data;
        if(newAccount){
            data = await authService.createUserWithEmailAndPassword(email,password);
            
        }else{
            data = await authService.signInWithEmailAndPassword(email,password);
            alert("로그인 성공");
        }
            console.log(data);
        } catch(error){
            // console.log(error);
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        console.log(event.target.name);
        const {
            target : { name }
        } = event;
        let provider;
        if (name == "google" ){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if (name == "github" ){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    };

    return(
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faTwitter}
                color={"#04AAFF"}
                size="3x"
                style={{ marginBottom: 30 }}
            />
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder = "Email" required value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder = "Password" required value={password} onChange={onChange}/>
                <input type="submit" placeholder = "Log In" value={newAccount ? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign In" : "Create Account"}
            </span>
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">
                Continue with Google <FontAwesomeIcon icon={faGoogle} />
                </button>
                <button onClick={onSocialClick} name="github" className="authBtn">
                Continue with Github <FontAwesomeIcon icon={faGithub} />
                </button>
            </div>
        </div>
    )
}

export default Auth;