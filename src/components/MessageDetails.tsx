import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function MessageDetails(props: any) {
  console.log(props.chat)
  return (
    <Grid style={{ height: "83vh", overflow: 'auto' }}>
      {props.chat.map((user: any) => (
        <>
          {user.senderId === props.userId ? (
            <Box key={user.id} sx={{ maxWidth: "60%;", minWidth: "20%", backgroundColor: "#d9fdd3", float: "right", borderRadius: 3, display: "block", marginLeft: "30%;" }} my={1} px={2} py={0.6} mr={2}>
              <Typography variant="body2" sx={{ display: "block" }} color={"GrayText"}>{user.content}</Typography>
              <Typography variant="body2" sx={{ display: "block", float: "right", fontWeight: "100", fontSize: "smaller" }} color={"GrayText"}>{user.createdAt.toString().split("T")[1].split(".")[0]} </Typography >
            </Box>
          ) :
            (
              <Box key={user.id} sx={{ maxWidth: "60%;", minWidth: "20%", backgroundColor: "#ffffff", float: "left", borderRadius: 3, display: "block", marginRight: "30%;" }} my={1} px={2} py={0.6} ml={2}>
                <Typography variant="body2" sx={{ display: "block" }} color={"GrayText"}>{user.content}</Typography>
                <Typography variant="body2" sx={{ display: "block", float: "right", fontWeight: "100", fontSize: "smaller" }} color={"GrayText"}>{user.createdAt.toString().split("T")[1].split(".")[0]} </Typography >
              </Box>
            )}
        </>
      ))}
    </Grid>
  )
}
