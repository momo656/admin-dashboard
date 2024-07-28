
import { Box} from "@mui/material";
import Bar from "./barData";
import Header from "../../components/Header";

const BarChart = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;