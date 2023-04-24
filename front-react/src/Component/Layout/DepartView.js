import NestedList from "../AdminPerson/NestedList";
import React, { Component } from "react";
import Global from "../global/Global";
import DepartLoaleTextGrid from "../AdminPerson/Department/DepartLoaleTextGrid";
import { Box } from '@mui/material';

class DepartView extends Component {
    render() {
      return (
        <div>
        <Global />
          <Box display={"flex"}>
            <NestedList />  
           {/* 오른쪽 영역 */}
            <Box sx={{
              width: 'calc(100% - 150px)',
              height: '100vh',
              bgcolor: 'background.paper',
              color: 'text.primary',
              padding: '1rem',
            }}>
            <DepartLoaleTextGrid />
          </Box>
        </Box>
        </div>
      );
    }
  }
  export default DepartView;