import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";

function Profile() {
    const { user } = useAuth0();

    return (
        <div>
            <Navbar></Navbar>
            <h1>Profile</h1>
            <div>
                {user.username}
            </div>
        </div>
    )
}

export default Profile;