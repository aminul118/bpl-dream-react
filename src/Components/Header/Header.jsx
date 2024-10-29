import PropTypes from "prop-types";
import { BsCoin } from "react-icons/bs";
import logo from "../../assets/image/logo.png";
export default function Header({ coin }) {
  return (
    <header className="flex justify-between py-6 items-center sticky z-50 top-0 b backdrop-blur-lg px-10 2xl:px-28 shadow-xl">
      <nav>
        <img src={logo} alt="" />
      </nav>
      <nav>
        <ul className="flex justify-between items-center gap-7">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixure</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
          <button className="flex items-center justify-between gap-2 text-xl font-semibold border-2 px-4 py-2 rounded-xl bg-gray-50 ">
            {coin} coin
            <span className="text-yellow-500 ">
              <BsCoin />
            </span>
          </button>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  coin: PropTypes.number.isRequired, 
};