import axios from "axios";
import './playernewform.css'
import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function PlayerNewForm() {
    let navigate = useNavigate();

    const addPlayer = (newPlayer) => {
        axios
          .post(`${API}/players`, newPlayer)
          .then(
            () => {
              navigate(`/players`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
    };

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

    const handleTextChange = (event) => {
        setPlayer({ ...player, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addPlayer(player);
    };

    return (
        <div className="new">
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
  
                <label htmlFor="position">Position:</label>
                <select id="position" value={player.position} onChange={handleTextChange}>
                    <option value="">Select a position</option>
                    <option value="PG">PG</option>
                    <option value="SG">SG</option>
                    <option value="SF">SF</option>
                    <option value="PF">PF</option>
                    <option value="C">C</option>
                </select>

                <label htmlFor="is_active">Is Active:</label>
                <select id="is_active" value={player.is_active} onChange={handleTextChange}>
                    <option value="">Is Player Active?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

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

            <Link to={`/players`}><button className="back">Back</button></Link>
        </div>
    )
}