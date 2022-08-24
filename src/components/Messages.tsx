import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Messages(props:any) {
  return (
    <Grid style={{ height: "83vh", overflow: 'auto' }}>
    {props.users.map((user:any) => (
        <Box mb={1} className={"message-list-item"} sx={{ borderBottom: "1px solid #E0E0E0"}}  onClick={(i)=>{props.setSelectedUser({name:user.name,imgUrl:user.imgUrl})}}>
          <Grid item >
            <Avatar src={user.imgUrl} sx={{ display: "inline-block" }} />
            <Typography variant="h6" sx={{ display: "inline-block", marginLeft: 2, paddingBottom: 4 }}>{user.name}</Typography >
            <Typography variant="body2" sx={{ display: "inline-block", float: "right", marginRight: 2 }} color={"GrayText"}>{user.date}</Typography >
          </Grid>
          <Typography variant="body2" color={"GrayText"}>{user.message.slice(0, 60)}...</Typography>
        </Box>
    ))}
    </Grid>
  )
}
