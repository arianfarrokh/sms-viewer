import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MessageIcon from '@mui/icons-material/Message';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import HeaderCard from "./HeaderCard";


const HeaderHome = () => {
  return (
    <>
      <Grid mt={5} container>
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
      <Grid spacing={2} mt={5} container>
        <HeaderCard
          title="همه پبام ها"
          bgcolor="#506266"
          Icon={MessageIcon}
          description={8}
        />
        <HeaderCard title="کل مبلغ خرج‌شده"
          bgcolor="#e43333"
          description={10000}
          Icon={CallReceivedIcon}
        />
        <HeaderCard title="کل مبلغ دریافت شده"
          bgcolor="#9AEBA3"
          description={10000}
          Icon={CallMissedOutgoingIcon}
        />
        <HeaderCard title="موجودی نهایی"
          bgcolor="#bd711aff"
          description={10000}
          Icon={CallMissedOutgoingIcon}
        />
      </Grid>
    </>
  );
};

export default HeaderHome;
