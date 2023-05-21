import './players.css'
import axios from "axios";
import { useState, useEffect } from "react";
import Player from './Player';
const API = process.env.REACT_APP_API_URL;


export default function Players() {
    const [players, setPlayers] = useState([])
    const [originalPlayers, setOriginalPlayers] = useState([])

    useEffect(() => {
        axios.get(`${API}/players`)
            .then((response) => {
                setPlayers(response.data);
                setOriginalPlayers(response.data)
                console.log(players)
            })
            .catch((e) => console.warn("catch", e));
    }, []);

    const sortByActive = (active) => {
        if (active === true || active === false) {
            const filteredPlayers = originalPlayers.filter((player) => player.is_active === active);
            setPlayers(filteredPlayers);
        } else {
            setPlayers(originalPlayers)
        }
    };

    return (
        <div>
            <div className="Sort">
                <button onClick={() => sortByActive(true)}>Sort by Active</button>
                <button onClick={() => sortByActive(false)}>Sort by Not Active</button>
                <button onClick={() => sortByActive()}>Show all Players</button>
            </div> 

            <div className="players">
            {players.map((player) => {
                return (
                    <div><Player key={player.id} player={player}/></div>
                )
            })}
            </div>
        </div>
    )
}