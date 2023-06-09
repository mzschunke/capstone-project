import NavBar from "@/Components/NavBar";
import StatsSelector from "@/Components/StatsSelector";
import { useState, useEffect } from "react";
import { Headline } from "@/styles";
import styled from "styled-components";
import StatsDisplay from "@/Components/StatsDisplay";

const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.6rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
`;

export default function Stats({ CURRENT_SEASON }) {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedSeason, setSelectedSeason] = useState(2022);
  const [playerStats, setPlayerStats] = useState(null);
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState("");
  const [selectedSeasonTwo, setSelectedSeasonTwo] = useState(2022);
  const [playerTwoStats, setPlayerTwoStats] = useState(null);

  const handlePlayerChange = (selectedOption) => {
    setSelectedPlayer(selectedOption.value);
  };

  const handlePlayerTwoChange = (selectedOption) => {
    setSelectedPlayerTwo(selectedOption.value);
  };

  const handleSeasonChange = (selectedOption) => {
    setSelectedSeason(selectedOption.value);
  };

  const handleSeasonTwoChange = (selectedOption) => {
    setSelectedSeasonTwo(selectedOption.value);
  };

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeason}&player_ids[]=${selectedPlayer}`
        );
        const fetchedData = await response.json();
        const playerStats = fetchedData.data[0];
        setPlayerStats(playerStats);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }

    fetchPlayer();
  }, [selectedPlayer, selectedSeason]);

  useEffect(() => {
    async function fetchPlayerTwo() {
      try {
        const response = await fetch(
          `https://www.balldontlie.io/api/v1/season_averages?season=${selectedSeasonTwo}&player_ids[]=${selectedPlayerTwo}`
        );
        const fetchedData = await response.json();
        const playerTwoStats = fetchedData.data[0];
        setPlayerTwoStats(playerTwoStats);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }

    fetchPlayerTwo();
  }, [selectedPlayerTwo, selectedSeasonTwo]);

  return (
    <>
      <Headline>COMPARE</Headline>
      <StatsSelector
        selectedPlayer={selectedPlayer}
        onSelectPlayer={handlePlayerChange}
        selectedPlayerTwo={selectedPlayerTwo}
        onSelectPlayerTwo={handlePlayerTwoChange}
        selectedSeason={selectedSeason}
        onSelectSeason={handleSeasonChange}
        selectedSeasonTwo={selectedSeasonTwo}
        onSelectSeasonTwo={handleSeasonTwoChange}
        CURRENT_SEASON={CURRENT_SEASON}
      />
      <DisplayContainer>
        <StatsDisplay
          playerStats={playerStats}
          playerTwoStats={playerTwoStats}
          selectedPlayer={selectedPlayer}
          selectedPlayerTwo={selectedPlayerTwo}
          selectedSeason={selectedSeason}
          selectedSeasonTwo={selectedSeasonTwo}
        ></StatsDisplay>
      </DisplayContainer>
      <NavBar />
    </>
  );
}
