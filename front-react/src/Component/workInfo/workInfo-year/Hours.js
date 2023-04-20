import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import ScheduleIcon from "@mui/icons-material/Schedule";

// css
import "../../global/global.css";

const items = [
  { text: "근무 일수", number: 100 },
  { text: "총 시간", number: 1 },
  { text: "평균 시간", number: 10 },
];

export default function Hours() {
  return (
    <div>
      <Box display="flex">
        <ScheduleIcon className="title-s" />
        <Typography
          className="title-s"
          fontWeight="bold"
          style={{ marginLeft: "8px" }}
        >
          근무 시간
        </Typography>
      </Box>
      <Box className="workInfoBox" height="100px" textAlign="center">
        <Grid container spacing={1}>
          {items.map((item) => (
            <Grid item xs={6} md={4} key={item.text}>
              <Typography>{item.text}</Typography>
              <Typography>{item.number}시간</Typography>
              <Divider orientation="vertical" flexItem />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
