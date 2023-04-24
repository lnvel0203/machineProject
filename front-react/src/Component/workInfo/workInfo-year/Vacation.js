import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// css
import "../../global/global.css";

const handleClick = () => {
  const features = "width=900,height=900,top=100,left=100";
  window.open("/document", "_blank", features);
};

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

              <Button
                onClick={handleClick}
                variant="outlined"
                size="small"
                style={{
                  border: "1px solid #263238",
                  color: "#263238",
                  boxShadow: "none",
                }}
              >
                휴가 신청
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
