import * as React from "react";
import { Grid, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

// 컴포넌트
import Attendance from "./workInfo-year/Attendance";
import Vacation from "./workInfo-year/Vacation";
import Hours from "./workInfo-year/Hours";

import Plan from "./workInfo-today/Plan";
import Check from "./workInfo-today/Check";
import WorkStatus from "./workInfo-today/WorkStatus";

import WeeklyWorkInfo from "./work-weekly/WeeklyWorkInfo";

export default function WorkInfo() {
  return (
    <Box display={"flex"}>
      <Box width={90}>.</Box>
      <Box width={"100%"} mr={2} mb={2}>
        <Typography
          className="title-m"
          variant="h6"
          fontWeight="bold"
          mt={1}
          mb={3}
        >
          올해 근무 정보
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Attendance />
          </Grid>
          <Grid item xs={6} md={4}>
            <Vacation />
          </Grid>
          <Grid item xs={6} md={4}>
            <Hours />
          </Grid>
        </Grid>
        <Typography
          className="title-m"
          variant="h6"
          fontWeight="bold"
          mt={5}
          mb={3}
        >
          오늘 근무 현황
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} md={4}>
            <Plan />
          </Grid>
          <Grid item xs={6} md={4}>
            <Check />
          </Grid>
          <Grid item xs={6} md={4}>
            <WorkStatus />
          </Grid>
        </Grid>

        <Typography
          className="title-m"
          variant="h6"
          fontWeight="bold"
          mt={5}
          mb={1}
        >
          주간 근무 현황
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <WeeklyWorkInfo />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
