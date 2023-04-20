import React from "react";
import { useHistory } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";

// 아이콘
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FolderIcon from "@mui/icons-material/Folder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ChatIcon from "@mui/icons-material/Chat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

// 컴포넌트
import AppRouter from "../route/RouterComponent";
// import { SsidChartOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//임시 관리자 권한을 가진 인원일경우
//이 경로를 타게됨.
//session == 를 숫자를 넣으면 아이콘이 보임.
//if(session == "2"){   //인사관리 아이콘 보기.
const session = "";

const items = [
  { text: "홈", icon: <HomeIcon />, link: "/test" },
  { text: "메일", icon: <EmailIcon />, link: "/mail" }, //부석현 -메일
  { text: "전자결제", icon: <DriveFileRenameOutlineIcon />, link: "/" }, // 조우주 - 전자결제
  { text: "주소록", icon: <AccountTreeIcon />, link: "/" }, // 김희수 - 주소록
  { text: "내 정보", icon: <AssignmentIndIcon />, link: "/" }, // 김재인 - 내 정보
  { text: "캘린더", icon: <CalendarMonthIcon />, link: "/" }, // 김성훈 - 캘린더
  { text: "자료실", icon: <FolderIcon />, link: "/" },
  { text: "게시판", icon: <FormatListBulletedIcon />, link: "/" },
  { text: "메신저", icon: <ChatIcon />, link: "/message" }, // 부석현 - 전자결제
  { text: "회의실 예약", icon: <AccessTimeIcon />, link: "/" },

  // 추가 & 변경하여 본인담당 업무
  session === "1"
    ? { text: "인사관리", icon: <ManageAccountsIcon />, link: "/#" } // 세션 1
    : session === "2"
    ? { text: "경영관리", icon: <ManageAccountsIcon />, link: "/#" } // 세션 2
    : null,
].filter((item) => item !== null);

export default function Global() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // 링크 이동
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // 링크 이동 메서드
  const handleItemClick = (link) => {
    history.push(link);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color=""
        open={open}
        sx={{ backgroundColor: "" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: "" }}>
          {items.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => handleItemClick(item.link)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <AppRouter />
      </Box>
    </Box>
  );
}
