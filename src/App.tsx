import { Grid} from "@mui/material";
import { useState } from "react";
import MessageDetails from "./components/MessageDetails";
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";
import ListNav from "./components/ListNav";
import DetailsNav from "./components/DetailsNav";
import "./public/main.css"
export default function () {

  const users = [
    {
      name: "Mehmet",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "sent"


    },
    {
      name: "Ali",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "receive"

    },
    {
      name: "Zülküf",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "sent"

    },
    {
      name: "Hakkı",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "sent"

    },
    {
      name: "Ayşe",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "receive"

    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "sent"

    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "sent"

    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "receive"

    },
    {
      name: "Beyza",
      imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294314360_3217891701815005_4278903482080621637_n.jpg?ccb=11-4&oh=01_AVzNAJaRH_pGj4DoZkLuU49JOui9Ljgs51z2dLeiLXnuXA&oe=631695F0",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat soluta inventore quam corporis vero. Maiores ullam in quidem expedita atque tempora est, porro illo blanditiis quo quasi voluptatum eius!",
      date: "13:47", type: "receive"

    }
  ]

  const [selectedUser, setSelectedUser] = useState({
    name: "Mehmet",
    imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD"
  })

  return (
    <div style={{maxHeight:"100vh"}}>
      <Grid container spacing={2} sx={{ backgroundColor: "#fffff"}}>
        <Grid item xs={3} sx={{paddingTop: "0 !important" }}>
        <ListNav selectedUser={selectedUser}></ListNav>
         <Messages users={users} setSelectedUser={setSelectedUser}></Messages>
        </Grid>
        <Grid item xs={9} sx={{ backgroundColor: "#efeae2", paddingTop: "0 !important", paddingLeft: "0 !important" }}>
         <DetailsNav selectedUser={selectedUser}></DetailsNav>
         <MessageDetails users={users}></MessageDetails>
         <NewMessage></NewMessage>
        </Grid>
      </Grid>
    </div>
  );
}

