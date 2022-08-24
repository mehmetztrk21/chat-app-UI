import {  Box, FormControl, Grid, IconButton, OutlinedInput } from '@mui/material'
import React from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AddLinkIcon from '@mui/icons-material/AddLink';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
export default function NewMessage() {
  return (
    <Grid container sx={{ width: '100%', backgroundColor: "#f0f2f5" }}>
    <Grid item xs={2} sx={{ pl: 8 }}>
      <IconButton><MoodIcon sx={{ color: "#54656f", float: "right" }} fontSize={"large"} ></MoodIcon></IconButton>
      <IconButton><AddLinkIcon sx={{ color: "#54656f", float: "right" }} fontSize={"large"}></AddLinkIcon></IconButton>

    </Grid>

    <Grid item xs={9}>
      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 3 }}>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput placeholder="Bir mesaj yazın" />
        </FormControl>
      </Box>
    </Grid>
    <Grid item xs={1}>
      <IconButton><KeyboardVoiceIcon sx={{ color: "#54656f", pl: 3 }} fontSize={"large"}></KeyboardVoiceIcon></IconButton>
    </Grid>
  </Grid>
  )
}
