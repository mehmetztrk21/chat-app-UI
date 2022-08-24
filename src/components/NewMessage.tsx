import {  Box, FormControl, Grid, IconButton, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AddLinkIcon from '@mui/icons-material/AddLink';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import axios from 'axios';
export default function NewMessage(props:any) {
  const [msg,setMsg]=useState("");
  const sendMessage=async()=>{
    var response:any = await axios.post('http://localhost:3000/message/send',{reciverId:2,content:msg}, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiTWVobWV0Iiwic3VybmFtZSI6IsOWenTDvHJrIiwiZW1haWwiOiJtZWhtZXQuenRyazIxMzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkNEZLU0I1RFVFcUhtUWZLY3ZtVXRnT0FRRzE4TGRPTFFGam54MkdBNlgyNlVnd1p3VkpmcGkiLCJpbWFnZVVybCI6Imh0dHBzOi8vcHBzLndoYXRzYXBwLm5ldC92L3Q2MS4yNDY5NC0yNC8yOTQ5MDAyNjRfMTc2NTI3NTk3Mzg0NzEzMV82NDkzOTU1MDk1NDg4MzA0MDY2X24uanBnP3N0cD1kc3QtanBnX3M5Nng5NiZjY2I9MTEtNCZvaD0wMV9BVnhJYkFUS1FERDZrUE1lRi05bG9rQnowSXBRWlU0QTBBaXVDQTJKcmFxUjVRJm9lPTYzMTY3M0JEIiwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yNFQxNDowNjoxOC42NzNaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yNFQxNDowNjoxOC42NzNaIn0sImlhdCI6MTY2MTM2NzExNywiZXhwIjoxNjYxMzcwNzE3fQ.os3R-b5Ww5wx7dpjZJAW7bpKnRL-pZdcUkruTHk1z0M`
      }
    });
    if(response){
      setMsg("");
      props.chatDetail();
    }
    else{
      console.log(response)
    }
  }
  return (
    <Grid container sx={{ width: '100%', backgroundColor: "#f0f2f5"}}>
    <Grid item xs={2} sx={{ pl: 8 }}>
      <IconButton><MoodIcon sx={{ color: "#54656f", float: "right" }} fontSize={"large"} ></MoodIcon></IconButton>
      <IconButton><AddLinkIcon sx={{ color: "#54656f", float: "right" }} fontSize={"large"}></AddLinkIcon></IconButton>
    </Grid>
    <Grid item xs={9}>
      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 3 }}>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput placeholder="Bir mesaj yazın" value={msg} onChange={(evt)=>{setMsg(evt.target.value)}} />
        </FormControl>
      </Box>
    </Grid>
    <Grid item xs={1}>
      <IconButton onClick={sendMessage}><KeyboardVoiceIcon sx={{ color: "#54656f", pl: 3 }} fontSize={"large"}></KeyboardVoiceIcon></IconButton>
    </Grid>
  </Grid>
  )
}
