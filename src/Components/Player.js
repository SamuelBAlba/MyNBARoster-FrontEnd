import './player.css'
import { Link } from 'react-router-dom'

export default function Player({player}) {
    return (
        <div className="player">
            <Link to={`/players/${player.id}`}><img src={player.img} alt={player.name}/></Link>
            <p>{player.name}</p>
            <p>{player.position}</p>
            <p>{player.is_active ? "Player is currently active" : "Player is not active"}</p>
        </div>
    )
}