import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';

export default function DetailsNav(props: any) {
    return (
        <>
            <Grid item sx={{ width: "100%" }}>
                <Box mb={1} sx={{ borderBottom: "1px solid #E0E0E0", backgroundColor: "#f0f2f5", padding: 1, py: 2 }}>
                    <Avatar src={props.chatUser.imageUrl} sx={{ display: "inline-block" }} />
                    <Typography variant="body1" sx={{ display: "inline", marginLeft: 2 }}>{props.chatUser.name}</Typography >
                    <div style={{ float: "right", display: "inline", marginTop: 10 }}>
                        <IconButton sx={{ mr: -1 }}><SearchIcon sx={{ color: "#54656f" }}></SearchIcon></IconButton>
                        <IconButton><MoreVertIcon sx={{ color: "#54656f" }}></MoreVertIcon></IconButton>
                    </div>
                </Box>
            </Grid>
        </>
    )
}
