import NestedList from "../AdminPerson/NestedList";
import React, { Component } from "react";
import Global from "../global/Global";
import CustomLocaleTextGrid from "../AdminPerson/Customer/CustomLocaleTextGrid";
import { Box } from '@mui/material';

class Add extends Component {
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
        <CustomLocaleTextGrid />
      </Box>
          </Box>
        </div>
      );
    }
  }
  export default Add;