import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Player from "../Player/Player";

export default function Players({ handleChoosePlayer }) {
  const [players, setPlayers] = useState([]);
  // console.log(players);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:gap-16  gap-8 mb-64">
      {players.map((player) => (
        <Player
          handleChoosePlayer={handleChoosePlayer}
          key={player.id}
          player={player}
        ></Player>
      ))}
    </div>
  );
}

Players.propTypes = {
  handleChoosePlayer: PropTypes.func.isRequired, 
};