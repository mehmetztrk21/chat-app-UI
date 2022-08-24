import { Avatar, Box, IconButton, InputAdornment, InputBase } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MessageIcon from '@mui/icons-material/Message';
export default function ListNav(props:any) {
  return (
    <>
    <Box pb={2} sx={{ borderBottom: "1px solid #f0f2f5;", backgroundColor:"#f0f2f5"}}>
    <Avatar src={props.selectedUser.imgUrl} sx={{ display: "inline-block", mt: 2 }} />
    <div style={{ float: "right", display: "inline", marginTop: 20 }}>
      <IconButton ><DonutLargeIcon sx={{ color: "#54656f" }}></DonutLargeIcon></IconButton>
      <IconButton ><MessageIcon sx={{ color: "#54656f" }}></MessageIcon></IconButton>
      <IconButton ><MoreVertIcon sx={{ color: "#54656f" }}></MoreVertIcon></IconButton>
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
