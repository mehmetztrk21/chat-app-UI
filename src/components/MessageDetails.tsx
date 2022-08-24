import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function MessageDetails(props:any) {
  return (
    <Grid style={{ maxHeight: "83vh", overflow: 'auto' }}>

            {props.users.map((user:any) => (
              <>
                {user.type === "sent" ? (
                  <Box sx={{ maxWidth: "60%;", backgroundColor: "#d9fdd3", float: "right", borderRadius: 3 }} my={1} p={2} mr={2}>
                    <Typography variant="body2" sx={{ display: "inline-block" }} color={"GrayText"}>{user.message}</Typography>
                    <Typography variant="body2" sx={{ display: "inline-block", float: "right" }} color={"GrayText"}>{user.date} </Typography >
                  </Box>

                ) :
                  (
                    <Box sx={{ maxWidth: "60%;", backgroundColor: "#ffffff", float: "left", borderRadius: 3 }} my={1} p={2} ml={2}>
                      <Typography variant="body2" sx={{ display: "inline-block" }} color={"GrayText"}>{user.message}</Typography>
                      <Typography variant="body2" sx={{ display: "inline-block", float: "right" }} color={"GrayText"}>{user.date} </Typography >

                    </Box>
                  )}
              </>
            ))}
            </Grid>

  )
}
