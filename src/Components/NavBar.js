import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <nav>
                <h1>
                    <Link to="/players">My Roster</Link>
                </h1>
                <button>
                    <Link to="/players/new">Add a Player</Link>
                </button>
            </nav>  
        </div>
    )
}