import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VacationButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        style={{
          border: "1px solid #263238",
          color: "#263238",
          boxShadow: "none",
        }}
        onClick={handleClickOpen}
      >
        휴가 신청
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#ffffff" }}>
          <Toolbar sx={{ backgroundColor: "#ffffff" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon sx={{ color: "#263238" }} />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1, color: "#263238" }}
              variant="h6"
              component="div"
            >
              휴가 신청
            </Typography>
            <Button autoFocus sx={{ color: "#263238" }} onClick={handleClose}>
              신청
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
}
