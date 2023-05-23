import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <nav>           
                    <Link to="/players"><h1>All Players</h1></Link>
                    <Link to="/"><h1>My NBA Roster</h1></Link>
                    <Link to="/players/new"><h1>Add Player</h1></Link>
            </nav>  
        </div>
    )
}