import { Box } from "@mui/material";
import Line from "./lineData";
import Header from "../../components/Header";

const LineChart = () => {
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;