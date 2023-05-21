import axios from "axios";
import './playereditform.css'
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


export default function PlayerEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [player, setPlayer] = useState({
        name: "",
        position: "",
        is_active: false,
        shooting: 0,
        passing: 0,
        dribble: 0,
        dunking: 0,
        defense: 0,
        rebound: 0,
        steal: 0,
        img: ""
    });

    const updatePlayer = (updatedPlayer) => {
        axios
          .put(`${API}/players/${id}`, updatedPlayer)
          .then(
            () => {
              navigate(`/players/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setPlayer({ ...player, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        axios.get(`${API}/players/${id}`).then(
          (response) => setPlayer(response.data),
          (error) => navigate(`/not-found`)
        );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePlayer(player, id);
    };



    return (
        <div className="edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                value={player.name}
                onChange={handleTextChange}
                placeholder="Name of Player"
                required
                />
                <br/>
  
                <label htmlFor="position">Position:</label>
                <select id="position" value={player.position} onChange={handleTextChange}>
                    <option value="">Select a position</option>
                    <option value="PG">PG</option>
                    <option value="SG">SG</option>
                    <option value="SF">SF</option>
                    <option value="PF">PF</option>
                    <option value="C">C</option>
                </select>

                <br/>
                <br/>


                <label htmlFor="shooting">Shooting:</label>
                <input
                id="shooting"
                type="number"
                value={player.shooting}
                onChange={handleTextChange}
                placeholder="Shooting"
                required
                />

                <label htmlFor="passing">Passing:</label>
                <input
                id="passing"
                type="number"
                value={player.passing}
                onChange={handleTextChange}
                placeholder="Passing"
                required
                />

                <label htmlFor="dribble">Dribble:</label>
                <input
                id="dribble"
                type="number"
                value={player.dribble}
                onChange={handleTextChange}
                placeholder="dribble"
                required
                />

                <label htmlFor="dunking">Dunking:</label>
                <input
                id="dunking"
                type="number"
                value={player.dunking}
                onChange={handleTextChange}
                placeholder="Dunking"
                required
                />

                <label htmlFor="Defense">Defense:</label>
                <input
                id="defense"
                type="number"
                value={player.defense}
                onChange={handleTextChange}
                placeholder="Defense"
                />

                <label htmlFor="Rebound">Rebound:</label>
                <input
                id="rebound"
                type="number"
                value={player.rebound}
                onChange={handleTextChange}
                placeholder="Rebound"
                />

                <label htmlFor="Steal">Steal:</label>
                <input
                id="steal"
                type="number"
                value={player.steal}
                onChange={handleTextChange}
                placeholder="Steal"
                />

                <label htmlFor="img">Image:</label>
                <input
                id="img"
                type="text"
                value={player.img}
                onChange={handleTextChange}
                placeholder="Image of Player"
                />

                <br/>
                <input type="submit"/>
            </form>
            <Link to={`/players/${id}`}><button className="back">Back</button></Link>
        </div>
    )
}