import { Logo } from "../atoms/logo";
import { Welcome } from "../atoms/welcome";


export function Header(){
    const username = "Guilherme";
    return(
        <div className="header">
            <div className="logo-div">
                <Logo />
            </div>
            <div className="title-div">
                <h1 className="home-title">Books</h1>
            </div>
            <Welcome />
        </div>
    )
}