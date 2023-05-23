import './playerdetails.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function PlayerDetails() {
    const [singlePlayer, setSinglePlayer] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [playerBadge, setPlayerBadge] = useState([])
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/players/${id}`)

            .then((response) => {
                setSinglePlayer(response.data)
                playerInfo(response.data)
            }).catch((e) => {
                console.warn("catch", e)
            })
    }, [id]);

    const deletePlayer = () => {
        axios.delete(`${API}/players/${id}`)
            .then(() => {
                navigate(`/players`);
            }, (error) => console.error(error))
            .catch((c) => console.warn("catch", c))
    };

    const handleDelete = () => {
        setShowConfirmation(true)
    };

    const playerInfo = (singlePlayer) => {
        const badges = []

        if (singlePlayer.shooting >= 80 && singlePlayer.dunking >= 80) {
            badges.push('Player is a Scorer')
        } else if (singlePlayer.shooting > 80) {
            badges.push('Player is a Shooter')
        } else if (singlePlayer.dunking > 80) {
            badges.push('Player is a Dunker')
        } if (singlePlayer.passing > 80) {
            badges.push('Player is a Facilitator')
        } if (singlePlayer.dribble >= 80 & singlePlayer.shooting >= 80) {
            badges.push('Player is a Shot Creator')
        } if (singlePlayer.defense >= 80) {
            badges.push('Player is a Defender')
        }

        setPlayerBadge(badges)
    
    }
    
    return (
        <div className='details'>

            <div className='main'>
                <div className='left'>
                <img src={singlePlayer.img} alt={singlePlayer.name}/>
                <h2>{singlePlayer.name} - {singlePlayer.position} </h2>
                <p>{singlePlayer.is_active ? "Player is currently active" : "Player is not active"}</p>
                </div>

                <div className='right'>
                    <h2>Player Badges</h2>
                    <ul>
                        {playerBadge.map((badge, index) => {
                            return <li key={index}>{badge}</li>
                        })}
                    </ul>
                </div>
            </div>

            <div className='attributes'>
                <p>Shooting: {singlePlayer.shooting}</p>
                <p>Passing: {singlePlayer.passing}</p>
                <p>Dribble: {singlePlayer.dribble}</p>
                <p>Dunking: {singlePlayer.dunking}</p>
                <p>Defense: {singlePlayer.defense}</p>
                <p>Rebound: {singlePlayer.rebound}</p>
                <p>Steal: {singlePlayer.steal}</p>
            </div>

            <div className='buttons'>
                <Link to='/players'>
                    <button>Back</button>
                </Link>

                <Link to={`/players/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {showConfirmation && (
                    <div className='confirm'>
                        <p>Are you sure you want to delete this player?</p>
                        <button onClick={() => {
                            deletePlayer();
                            setShowConfirmation(false);
                        }}>Yes</button>
                        <button onClick={() => setShowConfirmation(false)}>No</button>
                    </div>
                )}

        </div>
        
    )
}