import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/players">All Players</Link>
                </h1>
                <h1>My NBA Roster</h1>
                <h1>
                    <Link to="/players/new">Add Player</Link>
                </h1>

            </nav>  
        </div>
    )
}