import LogoutButton from "./LogoutButton";

function Navbar() {
    return (
        <div>
            <nav>
                <a href="/discover">Discover</a>
                <a href="/create-channel">Create a channel</a>
            </nav>
            <nav>
                <LogoutButton></LogoutButton>
                <a href="/profile">Profile</a>
            </nav>
        </div>     
    )
}

export default Navbar;