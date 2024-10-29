import { FaCircleUser } from "react-icons/fa6";
import { IoFlag } from "react-icons/io5";
import PropTypes from "prop-types"; // Import PropTypes for type checking

export default function Player({ player, handleChoosePlayer }) {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <div>
      <div className="bg-base-100 border-2 rounded-2xl py-8 px-12">
        <figure className="py-4">
          <img
            className="rounded-2xl bg-slate-400 w-full"
            src={image}
            alt={`${name}'s profile`} // Improve alt text
          />
        </figure>

        <div className="text-xl flex gap-2 items-center">
          <FaCircleUser />
          <span className="font-semibold">{name}</span>
        </div>
        <div className="flex gap-2 justify-between items-center text-gray-400 text-lg">
          <span className="flex items-center gap-2">
            <span className="text-xl">
              <IoFlag />
            </span>
            {country}
          </span>
          <span className="bg-gray-200 py-2 px-3 rounded-lg text-black">
            {role}
          </span>
        </div>
        <div className="divider"></div>
        <div>
          <div className="space-y-3">
            <p>Rating</p>
            <div className="flex justify-between items-center">
              <span>{battingType}</span>
              <span className="text-gray-500">{bowlingType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Price: ${biddingPrice}</span>
              <span>
                <button
                  onClick={() => {
                    handleChoosePlayer(player);
                  }}
                  className="border px-3 py-2 rounded-lg hover:bg-gray-200" // Add hover effect
                  aria-label={`Choose ${name} as a player`} // Accessibility feature
                >
                  Choose player
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Prop Types for better type checking
Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    battingType: PropTypes.string.isRequired,
    bowlingType: PropTypes.string.isRequired,
    biddingPrice: PropTypes.number.isRequired,
  }).isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};
