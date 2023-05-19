import './players.css'
import axios from "axios";
import { useState, useEffect } from "react";
import Player from './Player';
const API = process.env.REACT_APP_API_URL;


export default function Players() {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get(`${API}/players`)
            .then((response) => {
                setPlayers(response.data);
                console.log(players)
            })
            .catch((e) => console.warn("catch", e));
    }, []);


    return (
        <div className="players">
           
            {players.map((player) => {
                return (
                    <div><Player key={player.id} player={player}/></div>
                )
            })}
           
        </div>
    )
}