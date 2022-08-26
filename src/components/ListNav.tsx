import { Avatar, Box, Divider, IconButton, InputAdornment, InputBase, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import Login from "../Login";
export default function ListNav(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const logOut=async()=>{
    props.setLoggedIn(false);
    props.clearAll();
    localStorage.clear();
    return (
      <>
      <Login/>
      </>
    )
  }
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box pb={2} sx={{ borderBottom: "1px solid #f0f2f5;", backgroundColor: "#f0f2f5" }}>
        <Avatar src={props.selectedUser.imageUrl} sx={{ display: "inline-block", mt: 2 }} />
        <div style={{ float: "right", display: "inline", marginTop: 20 }}>
          <IconButton ><DonutLargeIcon sx={{ color: "#54656f" }}></DonutLargeIcon></IconButton>
          <IconButton ><MessageIcon sx={{ color: "#54656f" }}></MessageIcon></IconButton>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            ><MoreVertIcon sx={{ color: "#54656f" }}></MoreVertIcon></IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar src={props.selectedUser.imageUrl} /> Profile
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={logOut}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Box>


      <Box mb={2} mt={1}>
        <div style={{ backgroundColor: "#f0f2f5", display: "inline" }}>
          <InputBase
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            sx={{ ml: 1, flex: 1, backgroundColor: "#f0f2f5", width: "87%", py: 1, px: 1, borderRadius: 3 }}
            placeholder="Aratın veya yeni sohbet başlatın"
          />
        </div>
        <IconButton sx={{ p: '10px', float: "right" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  )
}
