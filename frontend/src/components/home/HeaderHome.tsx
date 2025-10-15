import React from 'react'
import {  Button, Grid, Stack, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";


const HeaderHome = () => {
  return (
    <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack>
              <Typography variant="h4">داشبورد بانکی</Typography>
              <Typography variant="body1">
                پیامک‌های بانکی خود را پیگیری و تجزیه و تحلیل کنید
              </Typography>
            </Stack>
          </Grid>
          <Grid sx={{ textAlign: "end" }} size={{ xs: 12, md: 6 }}>
            <Button
              startIcon={<AddBoxIcon />}
              sx={{ fontSize: "1.5rem" }}
              variant="contained"
            >
              افزودن پبامک
            </Button>
          </Grid>
        </Grid>
  )
}

export default HeaderHome