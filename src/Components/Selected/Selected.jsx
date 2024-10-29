
import PropTypes from "prop-types"; 
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Selected = ({ choosePlayer, handlePlayerDelete }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {choosePlayer.map((player) => (
          <SelectedPlayer
            key={player.id}
            handlePlayerDelete={handlePlayerDelete}
            player={player}
          />
        ))}
      </div>
    </div>
  );
};

export default Selected;


Selected.propTypes = {
  choosePlayer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      playerId: PropTypes.string.isRequired, 
      biddingPrice: PropTypes.number.isRequired,
     
    })
  ).isRequired,
  handlePlayerDelete: PropTypes.func.isRequired,
};
