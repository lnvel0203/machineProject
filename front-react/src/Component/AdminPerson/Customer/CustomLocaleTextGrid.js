import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center', // 텍스트 중앙 정렬
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center', // 텍스트 중앙 정렬
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  // '&:last-child td, &:last-child th': {
  //   border: 0,
  // },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// 컬럼에 맞춰서 나중에 수정이 필요(.23-04-24)
function createData(id, name, birth, address, deptid, postitionid, hiredate, role) {
  return { id, name, birth, address, deptid, postitionid, hiredate, role };
}

// 사원의 정보 데이터를 붙이는곳(.23-04-24)
const rows = [
  createData("hong@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구 땡땡동', '', '', '2023-04-24', '승인필요'),
  createData("hong2@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '인사팀', '팀장', '2022-04-24', '승인완료'),
  createData("hong3@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
  createData("hong4@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
  createData("hong5@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
  createData("hong6@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인완료'),
  createData("hong7@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
  createData("hong8@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
  createData("hong9@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
  createData("hong10@kosmo.com", '홍길동', '1991-05-01', '서울시 금천구', '', '', '2023-04-24', '승인필요'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ pl: 2, pt: 2 }}>사원 정보</Typography>
      <Box display={'flex'} justifyContent={"space-between"} mr={10}>
      <Box></Box>
      <Search style={{
                  border: "1px solid #263238",
                  color: "#263238",
                  boxShadow: "none",
                }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
              </Box>
      <Table sx={{ minWidth: 1500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>아이디</StyledTableCell>
            <StyledTableCell align="right">프로필</StyledTableCell>
            <StyledTableCell align="right">이름</StyledTableCell>
            <StyledTableCell align="right">생년월일</StyledTableCell>
            <StyledTableCell align="right">주소</StyledTableCell>
            <StyledTableCell align="right">부서</StyledTableCell>
            <StyledTableCell align="right">직급</StyledTableCell>
            <StyledTableCell align="right">입사일</StyledTableCell>
            <StyledTableCell align="right">승인여부</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell scope="row">{row.id}</StyledTableCell>
              <StyledTableCell>
                <Stack direction="row" spacing={2} display="flex" justifyContent="center" >
                  <Avatar src="/broken-image.jpg" />
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.birth}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.deptid}</StyledTableCell>
              <StyledTableCell align="right">{row.postitionid}</StyledTableCell>
              <StyledTableCell align="right">{row.hiredate}</StyledTableCell>
              <StyledTableCell align="right">{row.role}</StyledTableCell>
              
              {/* 버튼 추가 - 승인완료 상태의 사원에게는 버튼 출력되지 않게 함 */} 
              {row.role !== "승인완료" ? (
        <StyledTableCell>
          <Button>승인확인</Button>
        </StyledTableCell>
      ) : (
        <StyledTableCell></StyledTableCell>
      )}
    </StyledTableRow>
  ))}
  </TableBody>
      </Table>
      
      {/* 페이지 이동 버튼 영역 */}
      {/* '승인완료' 상태일때는 버튼 삭제하기 */}
      
      <Stack spacing={2} sx={{ mt: '2rem', alignItems: 'center' }}>
        <Pagination count={10} />
      </Stack>

    </TableContainer>

  );
}
