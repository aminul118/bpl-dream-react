// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import ToggleBar from "./Components/ToggleBar/ToggleBar";
import Players from "./Components/Players/Players";
import Footer from "./Components/Footer/Footer";
import Selected from "./Components/Selected/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [coin, setCoin] = useState(0);
  const [currentView, setCurrentView] = useState("players");
  const [choosePlayer, setChoosePlayer] = useState([]);

  const handleViewChange = (view) => setCurrentView(view);

  const addFreeCoins = () => {
    setCoin(coin + 6600000);
    toast.success("Added 6600000 free coins !");
  };

  const handleChoosePlayer = (player) => {
    const exists = choosePlayer.find((p) => p.playerId === player.playerId);

    if (choosePlayer.length >= 6) {
      toast.error("You cannot add more than 6 players.");
      return;
    }

    if (coin < player.biddingPrice) {
      toast.error("Not enough coins to select this player.");
      return;
    }

    if (!exists) {
      setChoosePlayer((prevPlayers) => [...prevPlayers, player]);
      setCoin((prevCoin) => prevCoin - player.biddingPrice);
      toast.success(`${player.name} has been added!`);
    } else {
      toast.warn("Player already exists");
    }
  };

  const handlePlayerDelete = (item) => {
    const updatedPlayers = choosePlayer.filter(
      (p) => p.playerId !== item.playerId
    );
    setChoosePlayer(updatedPlayers);
    toast.info(`${item.name} has been removed.`);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "available":
        return (
          <>
            <Players handleChoosePlayer={handleChoosePlayer} />
            
          </>
        );
      case "selected":
        return (
          <>
            <Selected
              handlePlayerDelete={handlePlayerDelete}
              choosePlayer={choosePlayer}
              selectedCount={choosePlayer.length}
            />
            <button
              className="mb-40 mt-4 btn-free-credit"
              onClick={() => handleViewChange("players")}
            >
              Add More Player
            </button>
          </>
        );
      case "players":
        return <Players handleChoosePlayer={handleChoosePlayer} />;
      default:
        return null;
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Header coin={coin} />
      <div className="w-11/12 mx-auto">
        <Hero handleFreeCoin={addFreeCoins} />
        <ToggleBar
          handleAvailable={() => handleViewChange("available")}
          handleSelected={() => handleViewChange("selected")}
          activeView={currentView}
          selectedCount={choosePlayer.length}
        />
        {renderCurrentView()}
      </div>
      <Footer />
    </>
  );
}
