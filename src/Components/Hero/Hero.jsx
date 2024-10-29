import PropTypes from "prop-types";
import heroImage from "../../assets/image/banner-main.png";
import "./Hero.css";
export default function Hero({ handleFreeCoin }) {
  return (
    <div className="hero bg-black py-32 rounded-xl">
      <div className="flex flex-col justify-center items-center space-y-4">
        <img className="w-52" src={heroImage} alt="" />

        <h2 className="text-white text-4xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-gray-400">Beyond Boundaries Beyond Limits</p>
        <button
          onClick={() => {
            handleFreeCoin();
          }}
          className="btn-free-credit "
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}
Hero.propTypes = {
  handleFreeCoin: PropTypes.func.isRequired, 
};