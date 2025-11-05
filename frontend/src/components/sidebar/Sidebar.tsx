"use client"


import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  const navLinkLists = [
    {
      href: "/",
      label: "پست ها",
    },
    {
      href: "/",
      label: "ورود",
    },
    {
      href: "/check-out",
      label: "خروج",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#1a202c",
          color: "#fff",
        },
      }}
    >
      <List sx={{ mt: 8, p: 2 }}>
        {navLinkLists.map((link) => (
          <ListItem
            key={link.href}
            component={Link}
            href={link.href}
            sx={{
              "&:hover": {
                backgroundColor: "#2d3748",
                borderRadius: "4px",
              },
            }}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}