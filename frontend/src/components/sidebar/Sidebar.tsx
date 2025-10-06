"use client";

import React  from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

 type NavLinkType = {
  label: string;
  href: string;
};

type SidebarType = {
  navLinkList: NavLinkType[];
};




const Sidebar: React.FC<SidebarType> = ({ navLinkList }) => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
             marginTop : 9,
            backgroundColor: "grey",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {navLinkList.map((link, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} href={link.href}>
                <Typography fontSize={'1.2rem'} fontWeight={'bold'} component={"h3"} >{link.label}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
