import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Delete from './Delete';
export default function MessageDetails(props: any) {
  const bottomRef: any = useRef(null);
  const [deleted, setDeleted]: any = useState(0);
  const [open, setOpen]: any = useState(false);
  const [msg,setMsg]:any=useState("");
  const handleClick = async (id: number,content:any) => {
    setDeleted(id);
    setMsg(content);
    setOpen(true);
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [props.chat])

  return (
    <div style={{ height: "83vh", overflow: 'auto' }} >
      {props.chat.map((user: any) => (
        <div key={parseInt(user.id)} style={{ overflow: 'auto' }}  >
          {user.senderId === props.currentUser ? (
            <Box sx={{ maxWidth: "60%;", minWidth: "20%", backgroundColor: "#d9fdd3", float: "right", borderRadius: 3, display: "block", marginLeft: "30%;" }} my={1} px={2} py={0.6} mr={2} >
              <IconButton sx={{ float: "right" }} onClick={(() => { handleClick(user.id,user.content) })}
              ><DeleteIcon sx={{ color: "gray" }} fontSize="small"></DeleteIcon></IconButton>
              <br />
              <Typography variant="body2" color={"GrayText"} sx={{ wordWrap: "break-word" }}>{user.content}
              </Typography>
              <Typography variant="body2" sx={{ display: "block", float: "right", fontWeight: "100", fontSize: 10 }} color={"GrayText"}>{new Date(user.createdAt).getDay() == new Date().getDay() ? new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString() : user.createdAt.split(" ")[0].split("T")[0] + " " + new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString()} </Typography >
            </Box>
          ) :
            (
              <Box sx={{ maxWidth: "60%;", minWidth: "20%", backgroundColor: "#ffffff", float: "left", borderRadius: 3, display: "block", marginRight: "30%;" }} my={1} px={2} py={0.6} ml={2}>
                <Typography variant="body2" sx={{ wordWrap: "break-word" }} color={"GrayText"} >{user.content}</Typography>
                <Typography variant="body2" sx={{ display: "block", float: "right", fontWeight: "100", fontSize: 10 }} color={"GrayText"}>{new Date(user.createdAt).getDay() == new Date().getDay() ? new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString() : user.createdAt.split(" ")[0].split("T")[0] + " " + new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString()} </Typography >
              </Box>
            )}
          <div style={{ marginTop: 1 }} ref={bottomRef} />
        </div>
      ))
      }
      <>
        <Delete chatDetail={props.chatDetail} token={props.token} deleted={deleted} open={open} setOpen={setOpen} msg={msg}></Delete>
      </>
    </div >
  )
}
