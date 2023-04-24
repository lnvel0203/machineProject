import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import CheckIcon from "@mui/icons-material/Check";

// css
import "../../global/global.css";

// 컴포넌트
import Clock from "./Clock";

const items = [
  { text: "회의" },
  { text: "외출" },
  { text: "외근" },
  { text: "교육" },
  { text: "출장" },
  { text: "휴식" },
];

export default function Check() {
  return (
    <div>
      <Box display="flex">
        <CheckIcon className="title-s" />

        <Typography
          className="title-s"
          fontWeight="bold"
          style={{ marginLeft: "8px" }}
        >
          근무 체크
        </Typography>
      </Box>
      <Box className="workInfoBox_" height="200px">
        <Clock />
        <Box display="flex" justifyContent="center">
          <Box border="1px solid #f2f2f2" justifyContent="center" width={210}>
            <Grid container spacing={1}>
              {items.map((item) => (
                <Grid item xs={4} key={item.text}>
                  <Button
                    variant="outlined"
                    size="small"
                    style={{
                      border: "1px solid #263238",
                      color: "#263238",
                      boxShadow: "none",
                    }}
                  >
                    {item.text}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
