import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EqualizerIcon from "@mui/icons-material/Equalizer";

// css
import "../../global/global.css";

const items = [
  { text: "지각", number: 100 },
  { text: "결근", number: 1 },
  { text: "조기퇴근", number: 10 },
  { text: "미체크", number: 3 },
];

export default function Attendance() {
  return (
    <div>
      <Box display="flex">
        <EqualizerIcon className="title-s" />
        <Typography
          className="title-s"
          fontWeight="bold"
          style={{ marginLeft: "8px" }}
        >
          근태 현황
        </Typography>
      </Box>
      <Box className="workInfoBox" height="100px">
        <Grid container spacing={2} textAlign="center">
          {items.map((item) => (
            <Grid item xs={6} md={3} key={item.text}>
              <Typography>{item.text}</Typography>
              <Typography>{item.number}회</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
