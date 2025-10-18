import { formatTransaction } from "@/utils/formatTransaction";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const MessageCard: React.FC<MessageType> = ({
  receivedAt,
  amount,
  balance,
  body,
  from,
  type,
}) => {
const { text, color } = formatTransaction(type ?? "", amount);

  return (
    <Paper
      sx={{
        p: 3,
        mt: 5,
        borderRadius: 4,
        bgcolor: "#E8F5E9",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1.5}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          {from}
        </Typography>
        <Stack textAlign="end" alignItems="flex-end" spacing={0.3}>
          <Typography sx={{ fontWeight: 600, color: "#2E7D32", fontSize: "1rem" }}>
            {type}
          </Typography>
          <Typography sx={{ fontSize: "0.9rem", color: "text.secondary" }}>
            {receivedAt}
          </Typography>
        </Stack>
      </Box>

      <Typography variant="body1" fontSize="1.1rem" color="#1B5E20" sx={{ mb: 1 }}>
        {body} 💸
      </Typography>

      <Typography
        textAlign="end"
        variant="h6"
        sx={{
          color,
          fontWeight: "bold",
          fontFamily: "IranSans, sans-serif",
        }}
      >
        {text} Rials
      </Typography>

      <Typography
        textAlign="end"
        variant="h5"
        sx={{
          color: "#388E3C",
          fontWeight: "bold",
          fontFamily: "IranSans, sans-serif",
        }}
      >
        Balance: {balance} Rials
      </Typography>
    </Paper>
  );
};

export default MessageCard;
