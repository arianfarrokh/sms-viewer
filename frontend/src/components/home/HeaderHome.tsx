"use client";

import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MessageIcon from "@mui/icons-material/Message";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import HeaderCard from "./HeaderCard";
import axios from "axios";
import { apiUrl } from "@/config";
import MessageCard from "./MessageCard";
import { formatJalali } from "@/utils/formatJalali";

const HeaderHome = () => {
  const [messages, setMessages] = React.useState<MessageType[]>([]);
  const [stats, setStats] = React.useState<StateType>({
    totalDeposit: 0,
    totalProfit: 0,
    balance: 0,
  });

  const totalMessages = messages?.length;
  React.useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${apiUrl}/messages`);
        setMessages(res.data);

        
        const totalDeposit = messages
          .filter((m) => m.type === "deposit")
          .reduce((sum, m) => sum + (m.amount ?? 0), 0);

        const totalProfit = messages
          .filter((m) => m.type === "profit")
          .reduce((sum, m) => sum + (m.amount ?? 0), 0);

        const balance =
          messages[messages.length - 1]?.balance ?? totalDeposit - totalProfit;

        setStats({ totalDeposit, totalProfit, balance });
      } catch (err) {
        console.log(err, "this is an error caused whem fetching ");
      }
    };
    fetchMessages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          description={totalMessages ?? 0}
        />
        <HeaderCard
          title="کل مبلغ خرج‌شده"
          bgcolor="#e43333"
          description={stats.totalDeposit}
          Icon={CallReceivedIcon}
        />
        <HeaderCard
          title="کل مبلغ دریافت شده"
          bgcolor="#9AEBA3"
          description={stats.totalProfit}
          Icon={CallMissedOutgoingIcon}
        />
        <HeaderCard
          title="موجودی نهایی"
          bgcolor="#bd711aff"
          description={stats.balance}
          Icon={CallMissedOutgoingIcon}
        />
      </Grid>
      {messages?.map((msg) => (
        <MessageCard
          key={msg.id}
          body={msg.body}
          amount={msg.amount}
          balance={msg.balance}
          from={msg.from}
          type={msg.type}
          receivedAt={formatJalali(msg.receivedAt)}
        />
      ))}
    </>
  );
};

export default HeaderHome;
