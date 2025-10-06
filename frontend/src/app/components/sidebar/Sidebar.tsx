'use client'
import React from 'react'
import { Divider, IconButton, Drawer, Toolbar, useTheme, Box, useMediaQuery } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const SideMenu: React.FC = ({  }) => {
  // const theme = useTheme()
  // const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))

  return (
    <Drawer
      // open={open}
      variant={ "permanent"}
      // onOpen={onCloseDrawer}
      sx={{
        '& .MuiDrawer-paper': {
          bgcolor: '#ccc',
          // color: 'var(--color-yellow)',
          // width: 260,
        },
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton
          sx={{
            color: 'var(--color-yellow)',
            '&:hover': {
              color: 'var(--color-white)',
              bgcolor: 'var(--color-hover-black)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
        </IconButton>
      </Toolbar>

      <Divider sx={{ borderColor: 'var(--color-yellow)' }} />

      {/* <Box sx={{ px: 1, mt: 1 }}>
        <MenuList onCloseDrawer={onCloseDrawer} />
      </Box> */}
    </Drawer>
  )
}

export default SideMenu
