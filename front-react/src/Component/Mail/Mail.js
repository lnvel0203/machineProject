import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// css
import "../global/global.css";

export default function Mail() {
  return (
    <div>
      <Typography
        className="title-s"
        fontWeight="bold"
        style={{ marginLeft: "8px" }}
      >
        기본 설정
      </Typography>
      <Box className="workInfoBox" height="100px"></Box>
    </div>
  );
}
