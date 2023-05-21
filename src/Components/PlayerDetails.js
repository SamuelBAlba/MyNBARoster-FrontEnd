import './playerdetails.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function PlayerDetails() {
    const [singlePlayer, setSinglePlayer] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/players/${id}`)

            .then((response) => {
                setSinglePlayer(response.data)
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

    // const handleDelete = () => {
    //     setShowConfirmation(true)
    // };


    return (
        <div className='details'>

            <div className='main'>
                <div className='left'>
                <img src={singlePlayer.img}/>
                <h2>{singlePlayer.name} - {singlePlayer.position} </h2>
                <p>is active</p>
                </div>

                <div className='right'>
                    <ol>
                        <li>Player is a scorred</li>
                        <li>player is a passer</li>
                    </ol>
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
                <button onClick={deletePlayer}>Delete</button>
            </div>
        </div>
        
    )
}