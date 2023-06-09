import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Select from "react-select";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    /* border: 1px solid red; */
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "roboto", sans-serif; 
    background: #5d8ebe;
 }
`;

// Homepage

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  border-bottom: 0.2px solid #cee0ed;
  background: rgb(39, 100, 176);
  height: 85px;
`;

export const MainHeadline = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  letter-spacing: 2.5px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
`;

// Global Styled Components:

export const Headline = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const NoData = styled.div`
  width: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.2rem;
  background-color: orange;
  font-size: 0.8rem;
  margin: 1rem;
  align-items: center;
  box-shadow: 1px 1px 2px;
`;

export const StyledSelect = styled(Select)`
  width: 100px;
  height: 40px;
  align-self: center;
  margin-bottom: 10px;
  margin-top: 5px;
`;

// Table Stylings:

export const TR = styled.tr`
  border: 3px solid black;
`;

export const TH = styled.th`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  background-color: #cee0ed;
`;

export const TD = styled.td`
  border-left: 1px solid black;
  background-color: white;
  border-radius: 5%;
  border: 1px solid black;
  height: 1rem;
  font-weight: 500;
  text-align: center;
`;

// TeamPage [id] Stylings:

export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;
  align-items: center;
  padding-top: 2.5rem;
  margin: 0 10px 0 10px;
`;

export const TeamName = styled.h2`
  font-size: 2.2rem;
  color: #0d48a0;
  text-align: center;
  text-shadow: 1px 1px 0;
`;

export const StyledTeamDetails = styled.div`
  text-align: center;
  font-size: 0.7rem;
  font-weight: 550;
`;

// PlayerPage [id] Stylings:

export const PlayerBox = styled.div`
  justify-content: center;
  min-width: 420px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  margin-left: 0.7rem;
  margin-right: 1 rem;
  gap: 1.2rem;
  justify-content: center;
`;

export const PlayerNameBio = styled.h1`
  font-size: 2rem;
  color: #0d48a0;
  text-shadow: 1px 1px 0;
  margin-right: 0.3rem;
`;

export const PlayerDetails = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-around;
  padding: 0.5;
`;

export const StyledDescriptionList = styled.dl`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  background-color: rgb(39, 100, 176, 0.5);
  padding: 8px;
  border-radius: 10px;
  border: 0.1px solid white;
  margin: 10px;
`;

export const StyledTerm = styled.dt`
  font-weight: 700;
`;

export const StyledDefinition = styled.dd`
  font-style: oblique;
`;
