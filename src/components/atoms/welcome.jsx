import { LogOutIcon } from "./logOutIcon";

export function Welcome(){
    const username = "Guilherme";

    return(
        <div className="welcome-div">
            <h3 className="greeting-title">Welcome, {username}</h3>
            <LogOutIcon />
        </div>
    )
}