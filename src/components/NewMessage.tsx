import AddLinkIcon from '@mui/icons-material/AddLink';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import { Box, FormControl, Grid, IconButton, OutlinedInput } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function NewMessage(props: any) {
  const [msg, setMsg] = useState("");
  const handleKeyPress = async (e: any) => {
    if (e.key === 'Enter' && msg.length > 0) {
      sendMessage();
    }
  }

  const sendMessage = async () => {
    var response: any = await axios.post('http://localhost:3000/message/send', { reciverId: props.chatUser.id, content: msg }, {
      headers: {
        Authorization: `Bearer ` + props.token
      }
    });
    if (response) {
      setMsg("");
      props.chatDetail();
    }
    else {
      console.log("error")
    }
  }
  useEffect(() => {
    setMsg("");
  }, [props.chatUser.id]);
  return (
    <Grid container sx={{ width: '100%', backgroundColor: "#f0f2f5" }}>
      <Grid item xs={2} sx={{ pl: 8 }}>
        <IconButton><MoodIcon sx={{ color: "#54656f", float: "right" }} fontSize={"large"} ></MoodIcon></IconButton>
        <IconButton><AddLinkIcon sx={{ color: "#54656f", float: "right" }} fontSize={"large"}></AddLinkIcon></IconButton>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ backgroundColor: "#ffffff", borderRadius: 3 }}>
          <FormControl sx={{ width: "100%" }}>
            <OutlinedInput placeholder="Bir mesaj yazın" value={msg} onChange={(evt) => { setMsg(evt.target.value) }} onKeyDown={handleKeyPress} />
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={1}>
        {msg.length > 0 ? (
          <IconButton onClick={sendMessage}><SendIcon sx={{ color: "#54656f", pl: 3 }} fontSize={"large"}></SendIcon></IconButton>

        ) : (
          <IconButton><KeyboardVoiceIcon sx={{ color: "#54656f", pl: 3 }} fontSize={"large"}></KeyboardVoiceIcon></IconButton>
        )}
      </Grid>
    </Grid>
  )
}
