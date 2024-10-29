import { MdDeleteForever } from "react-icons/md";
import PropTypes from "prop-types";

export default function SelectedPlayer({ player, handlePlayerDelete }) {
  const { name, battingType, image } = player;

  return (
    <div>
      <div className="border p-3 flex justify-between items-center rounded-2xl">
        {/* Card container */}
        <div>
          <div className="flex gap-2 items-center">
            <img className="w-20 rounded-2xl bg-slate-400" src={image} alt="" />
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p>{battingType} bat</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            handlePlayerDelete(player);
          }}
          className="text-3xl  text-red-500"
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

SelectedPlayer.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    battingType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  handlePlayerDelete: PropTypes.func.isRequired,
};
