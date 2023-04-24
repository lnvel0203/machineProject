import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import { useHistory } from "react-router-dom";

import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';



export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // 링크 이동
  const history = useHistory();

    // 링크 이동 메서드
    const handleItemClick = (link) => {
      history.push(link);
    };

  return (
    <Box display={"flex"}>
      <Box width={90}></Box>
      
      <Box sx={{
        boxsizing: 'border-box',
        display: 'flex',
        height: '100vh',
        flex: 'column',
        alignItems: 'flex-start',
        width: '200px',
        border: 'none',
        borderRight: '1px solid',
        borderRightColor: 'gray',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}>
        <List
          sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', verticalalign: 'top' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          verticalalign= "top"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" >
              관리자
            </ListSubheader>
          }
        >
          {/* 왼쪽 주메뉴 영역 - 메뉴 클릭하면 이동해야함(디폴트: 사원관리화면) */}
          <ListItemButton>
            <ListItemText primary="사원관리"  onClick={() => handleItemClick("/employee")} />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemText primary="부서관리" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="부서관리" onClick={() => handleItemClick("/employee/department")} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="부서배치" />
          </ListItemButton>
        </List>
      </Collapse>

          <ListItemButton>
            <ListItemText primary="직급관리" />
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
        </List>
      </Box>

  </Box>
  );
}
