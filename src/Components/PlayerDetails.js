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

    const handleDelete = () => {
        setShowConfirmation(true)
    };


    return (
        <div className='details'>

            <div className='main'>
            <img src={singlePlayer.img}/>
            <h2>{singlePlayer.name} {singlePlayer.position} </h2>
            <p>is active</p>
            </div>




        </div>
    )
}