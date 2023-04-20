import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import WorkTimeline from "./TimeLine";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

export default function WorkStatus() {
  return (
    <div>
      <Box display="flex">
        <DesktopWindowsIcon className="title-s" />
        <Typography
          className="title-s"
          fontWeight="bold"
          style={{ marginLeft: "8px" }}
        >
          근무 현황
        </Typography>
      </Box>
      <Box className="workInfoBox" height="200px">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <WorkTimeline />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
