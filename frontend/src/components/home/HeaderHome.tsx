import React from "react";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MessageIcon from '@mui/icons-material/Message';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import HeaderCard from "./HeaderCard";
import { format } from 'date-fns-jalali'

const HeaderHome = () => {
  const today = new Date();
  const formattedDate = format(today, 'yyyy/MM/dd')
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
      <Paper
        sx={{
          p: 3,
          mt: 5,
          borderRadius: 4,
          bgcolor: "#E8F5E9", // سبز خیلی روشن
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
            transform: "translateY(-4px)",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1.5}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            sx={{ letterSpacing: "0.5px" }}
          >
            بانک ملت 💳
          </Typography>
          <Stack textAlign="end" alignItems="flex-end" spacing={0.3}>
            <Typography
              sx={{ fontWeight: 600, color: "#2E7D32", fontSize: "1rem" }}
            >
              ۲۰٬۰۰۰+
            </Typography>
            <Typography
              sx={{ fontSize: "0.9rem", color: "text.secondary" }}
            >
              {formattedDate}
            </Typography>
          </Stack>
        </Box>

        <Typography
          variant="body1"
          fontSize="1.1rem"
          color="#1B5E20"
          sx={{ mb: 1 }}
        >
          ۲٬۰۰۰ تومان از حساب شما کم شد 💸
        </Typography>

        <Typography
          textAlign="end"
          variant="h4"
          sx={{
            color: "#388E3C",
            fontWeight: "bold",
            fontFamily: "IranSans, sans-serif",
          }}
        >
          ۱۰٬۰۰۰
        </Typography>
      </Paper>

    </>
  );
};

export default HeaderHome;
