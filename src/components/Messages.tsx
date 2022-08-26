import { Avatar, Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'

export default function Messages(props: any) {
  return (
    <Grid style={{ height: "83vh", overflow: 'auto' }}>
      {props.loggedIn ? (
        <>
          {props.chats.map((item: any) => (
            <Box key={item.user.id} mb={1} className={"message-list-item"} sx={{ borderBottom: "1px solid #E0E0E0" }} onClick={(i) => { props.setChatUser(item.user) }}>
              <Grid item >
                <Avatar src={item.user.imageUrl} sx={{ display: "inline-block" }} />
                <Typography variant="h6" sx={{ display: "inline-block", marginLeft: 2, paddingBottom: 4 }}>{item.user.name}</Typography >
                <Typography variant="body2" sx={{ display: "inline-block", float: "right", marginRight: 2 }} color={"GrayText"}>{new Date(item.createdAt).getDay() == new Date().getDay() ? new Date(item.createdAt).getHours().toString() + ":" + new Date(item.createdAt).getMinutes().toString() : item.createdAt.split(" ")[0].split("T")[0]}</Typography >
              </Grid>
              <Typography variant="body2" color={"GrayText"}>{item.content.length > 60 ? item.content.slice(0, 59) + "..." : item.content}</Typography>
            </Box>
          ))}
        </>
      ) : (
<></>
      )}

    </Grid>
  )
}
