import { Avatar, Grid, Theme, ThemeProvider, Typography } from "@mui/material";
import { Box, margin } from "@mui/system";
import { createStyles, createTheme } from "@mui/material/styles";


export default function () {
  const styles = (theme: Theme) =>
  createStyles({
    scrollBar: {
      '&::-webkit-scrollbar': {
        width: '0.4em'
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
    }
  });
  const users = [
    {
      name: "Mehmet",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Ali",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Zülküf",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Hakkı",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Ayşe",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47"
    }
  ]


  return (
    <div >
      <Grid container spacing={2} sx={{ backgroundColor: "#fffff" }}>
        <Grid item xs={3}>
        <ThemeProvider theme={styles}>

          {users.map((user) => (
            <>
              <Box mb={1} sx={{borderBottom:"1px solid #E0E0E0"}}>
                <Grid item >
                <Avatar src={user.imgUrl} sx={{ display: "inline-block"}} />
                <Typography variant="h6" sx={{ display: "inline-block", marginLeft:2, paddingBottom:4 }}>{user.name}</Typography >
                <Typography variant="body2" sx={{ display: "inline-block", float:"right" , marginRight:2}} color={"GrayText"}>{user.date}</Typography >
                </Grid>
        
                <Typography variant="body2" color={"GrayText"}>{user.message.slice(0,60)}...</Typography>
                </Box>
        

            </>
          ))}
          </ThemeProvider>
        </Grid>
        <Grid item xs={9} sx={{ backgroundColor: "#efeae2" }}>
          <p>xs=4</p>
        </Grid>

      </Grid>    </div>
  );
}

