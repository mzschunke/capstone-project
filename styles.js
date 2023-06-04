import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Select from "react-select";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    /* border: 1px solid black; */
  }

  body {
    margin: 0;
    font-family: "roboto", sans-serif; 
    background: #5d8ebe;

 }
`;

export const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-align: center;
  letter-spacing: 5px;
  color: #cee0ed;
  text-shadow: 3px 3px 3px #000000;
  margin-top: 0.2rem;
  margin-bottom: 0;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  height: 10%;
  align-self: flex-start;
`;

export const StyledButton = styled.button`
  color: #0d48a0;
  font-weight: 700;
  border-radius: 20%;
  background-color: #5bc0de;
`;

export const StyledTable = styled.table`
  width: 90%;
  border: 1px solid black;
  background-color: #b6d3d6;
  font-size: 0.8rem;
  margin: 1rem;
  box-shadow: 1px 1px 2px;
`;

export const TR = styled.tr`
  border: 3px solid black;
`;

export const TH = styled.th`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
`;

export const TD = styled.td`
  border-left: 1px solid black;
  background-color: #cee0ed;
  border-radius: 5%;
  border: 1px solid black;
  height: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const PlayerName = styled.div`
  background-color: #cee0ed;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 900;
  box-shadow: 1px 1px 2px;
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

export const SelectionContainer = styled.section`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  padding-left: 1rem;
`;

export const GamesContainer = styled.section`
  border-radius: 10px;
  padding: 1.5rem;
  margin: 0.2rem;
`;

export const StyledSelect = styled(Select)`
  width: 100px;
  height: 40px;
  align-self: center;
`;

export const GamesList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.5rem;
  display: grid;
  justify-content: start;
`;

export const StatsBox = styled.table`
  border: 1px solid black;
  background-color: #b6d3d6;
  font-size: 0.8rem;
  box-shadow: 1px 1px 2px;
`;

export const SingleGame = styled.li`
  margin-bottom: 0.6rem;
  margin-top: 0.6rem;
  font-size: 1rem;
`;

export const StyledDate = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 00;
  text-align: left;
`;

export const StatsList = styled.ul`
  list-style: none;
  background-color: rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.4rem;
  margin: 24px;
  display: grid;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
  font-size: 1rem;
  font-weight: 700;
`;
