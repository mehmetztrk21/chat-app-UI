import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";

export default function MessageDetails(props: any) {
  const bottomRef: any = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [props.chat])

  return (
    <div style={{ height: "83vh", overflow: 'auto' }} >
      {props.chat.map((user: any) => (
        <div style={{overflow: 'auto' }} >
          {user.senderId === props.currentUser ? (
            <Box key={parseInt(user.id) - parseInt(user.id) * 2} sx={{ maxWidth: "60%;", minWidth: "20%", backgroundColor: "#d9fdd3", float: "right", borderRadius: 3, display: "block", marginLeft: "30%;" }} my={1} px={2} py={0.6} mr={2}>
              <Typography variant="body2" sx={{ display: "block" }} color={"GrayText"}>{user.content}</Typography>
              <Typography variant="body2" sx={{ display: "block", float: "right", fontWeight: "100", fontSize: 10 }} color={"GrayText"}>{new Date(user.createdAt).getDay() == new Date().getDay() ? new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString() : user.createdAt.split(" ")[0].split("T")[0] + " " + new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString()} </Typography >
            </Box>
          ) :
            (
              <Box key={parseInt(user.id) - parseInt(user.id) * 2} sx={{ maxWidth: "60%;", minWidth: "20%", backgroundColor: "#ffffff", float: "left", borderRadius: 3, display: "block", marginRight: "30%;" }} my={1} px={2} py={0.6} ml={2}>
                <Typography variant="body2" sx={{ display: "block" }} color={"GrayText"}>{user.content}</Typography>
                <Typography variant="body2" sx={{ display: "block", float: "right", fontWeight: "100", fontSize: 10 }} color={"GrayText"}>{new Date(user.createdAt).getDay() == new Date().getDay() ? new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString() : user.createdAt.split(" ")[0].split("T")[0] + " " + new Date(user.createdAt).getHours().toString() + ":" + new Date(user.createdAt).getMinutes().toString()} </Typography >
              </Box>
            )}
      <div ref={bottomRef} />
        </div>
      ))}
      
    </div>
  )
}
