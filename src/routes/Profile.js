import { authService } from "fbase";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const history = useNavigate();

    const onLogOutClick = () => {
        authService.signOut();
        history("/");
    }

    return (
        
        <>
            <button onClick={onLogOutClick}>로그아웃</button>
        </>
    )
}

export default Profile;