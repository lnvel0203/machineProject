import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import VacationButton from "./VacationButton";

import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// css
import "../../global/global.css";

export default function Vacation() {
  return (
    <div>
      <Box display="flex">
        <HourglassTopIcon className="title-s" />
        <Typography
          className="title-s"
          fontWeight="bold"
          style={{ marginLeft: "8px" }}
        >
          휴가 현황
        </Typography>
      </Box>
      <Box className="workInfoBox" height="100px">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box display="flex" justifyContent="space-evenly">
              <Typography>잔여휴가</Typography>
              <Typography>{1000}일</Typography>

              <VacationButton size="small" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
