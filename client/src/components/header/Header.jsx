import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../context/userContext";

export default function Header() {
    const { email } = useContext(UserContext);

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games/catalog">All games</Link>
                {email
                    ? <div id="user">
                        <Link to="/games/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                        {email}
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
}