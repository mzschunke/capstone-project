import styled from "styled-components";
import Select from "react-select";

const StyledSelect = styled(Select)`
  min-width: 150px;
  margin-bottom: 12px;
  margin-right: 8px;
  font-size: 13px;
  box-shadow: 1px 1px 1px;
  border-radius: 5px;
`;

export default function BarChartSelect({ setBarSelection }) {
  const options = [
    { value: "pts", label: "Points" },
    { value: "ast", label: "Assists" },
    { value: "reb", label: "Rebounds" },
    { value: "stl", label: "Steals" },
    { value: "blk", label: "Blocks" },
    { value: "turnover", label: "Turnover" },
    { value: "fg_pct", label: "FG %" },
    { value: "fg3_pct", label: "3PT %" },
  ];

  const handleSelectChange = (selectedOption) => {
    setBarSelection(selectedOption.value);
  };

  return (
    <StyledSelect
      options={options}
      onChange={handleSelectChange}
      placeholder="Pick a category"
    />
  );
}
