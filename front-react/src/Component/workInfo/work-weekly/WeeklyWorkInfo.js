import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// css
import "../../global/global.css";

export default function WeeklyWorkInfo() {
  return (
    <div>
      <Box className="workInfoBox" height="300px">
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}></Grid>
        </Grid>
      </Box>
    </div>
  );
}
