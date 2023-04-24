import React, { Component } from "react";
import { Box, Tab, Tabs, TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import "./Mail.css";



const columns = [
  { field: "id", headerName: "사번", width: 70 },
  { field: "name", headerName: "이름", width: 130 },
  { field: "부서", headerName: "부서", width: 130 },
  { field: "직급명", headerName: "직급", width: 130 },
  { field: "실지급액", headerName: "실지급액", width: 130 },
  { field: "기본급", headerName: "기본급", width: 130 },
  { field: "상여금", headerName: "상여금", width: 130 },
  { field: "지급합계", headerName: "지급합계", width: 130 },
  { field: "공제합계", headerName: "공제합계", width: 130 },
  { field: "지급여부", headerName: "지급여부", width: 130 },
  { field: "명세서", headerName: "명세서", width: 130 },
];

const rows = [
 

];

class MailComponent extends Component {
  render() {
    return (



      
    <Box display={"flex"}>
 <div className="mail">
       <Button className="mail_btn">
        메일쓰기
       </Button>
       <Button className="mail_btn">
        내게쓰기
       </Button>

       <Typography>
       전체메일함
       </Typography>
       <Typography>
        보낸메일함
        </Typography>
        <Typography>
        받은메일함
        </Typography>
        <Typography>
        내게쓴메일함
        </Typography>
 </div>


      <Box width={90}>.</Box>
        <Box width={"100%"} mr={2} mb={2}>
        <div className="mail_list">
        <Typography
          className="title-m"
          variant="h6"
          fontWeight="bold"
          mt={1}
          mb={3}
        >
          <Box sx={{ width: "100%" }}>
{/*          
          <Tabs
      
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="급여정보 설정" />
            <Tab value="two" label="급여대장 다운로드" />
            <Tab value="three" label="급상여명세서 메일보내기" />
          </Tabs> */}

          { (
            <Box sx={{ flexGrow: 1, maxWidth: 850 }}>
             
        

              {/* 검색 필터 추가 */}
              <TextField
                id="outlined-basic"
                label="검색"
                variant="outlined"
                sx={{ width: "20ch", mb: 2 }}
              />

              <div style={{ height: 400, width: 1400 }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10]}
                  checkboxSelection
                  disableSelectionOnClick
                />
              </div>
            </Box>
          )}
        </Box>
        </Typography>

        </div>
      </Box>
    </Box>  

   
    );
  }
}
export default MailComponent;
