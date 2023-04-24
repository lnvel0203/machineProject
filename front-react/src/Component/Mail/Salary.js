import React from "react";
import { Box, Tab, Tabs, TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");
  const [secondary, setSecondary] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
    {
      id: 1,
      name: "정짜이",
      부서: "임원",
      직급명: "사장",
      실지급액: 100,
      기본급: 100,
      상여금: 50,
      지급합계: 150,
      공제합계: 0,
      지급여부: true,
      명세서: "링크",
    },
    {
      id: 2,
      name: "조우주",
      부서: "경영",
      직급명: "대리",
      실지급액: 110,
      기본급: 80,
      상여금: 30,
      지급합계: 110,
      공제합계: 20,
      지급여부: true,
      명세서: "링크",
    },
    {
      id: 3,
      name: "사원11",
      부서: "기획",
      직급명: "팀장",
      실지급액: 170,
      기본급: 120,
      상여금: 50,
      지급합계: 170,
      공제합계: 0,
      지급여부: true,
      명세서: "링크",
    },
    {
      id: 4,
      name: "사원2",
      부서: "개발",
      직급명: "사원",
      실지급액: 90,
      기본급: 70,
      상여금: 20,
      지급합계: 90,
      공제합계: 0,
      지급여부: true,
      명세서: "링크",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="급여정보 설정" />
        <Tab value="two" label="급여대장 다운로드" />
        <Tab value="three" label="급상여명세서 메일보내기" />
      </Tabs>
      {value === "one" && (
        <Box sx={{ flexGrow: 1, maxWidth: 850 }}>
          <br />
          <br />
          <br />
          <h2>2023년 4월 급여 </h2>

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
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Box>
      )}
      {value === "two" && (
        <Box sx={{ flexGrow: 1 }}>
          <br />
          <br />
          <br />
          <h2>급여 대장 다운로드</h2>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: 10 }}
          >
            Excel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginRight: 10 }}
          >
            PDF
          </Button>
        </Box>
      )}
      {value === "three" && (
        <Box sx={{ flexGrow: 1 }}>
          <br />
          <br />
          <br />
          <h2>급상여명세서 메일보내기</h2>
          <TextField
            id="standard-multiline-flexible"
            label="받는 사람"
            multiline
            maxRows={4}
            style={{ marginRight: 10 }}
          />
          <Button variant="outlined" color="primary">
            보내기
          </Button>
        </Box>
      )}
    </Box>
  );
}
