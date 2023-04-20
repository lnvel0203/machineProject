import * as React from "react";
import Grid from "@mui/material/Grid";

// 컴포넌트
import SetVacation from "./SetVacation";

export default function VacationRequest() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <SetVacation />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}></Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12}></Grid>
      </Grid>
    </div>
  );
}
