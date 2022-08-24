import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import MessageDetails from "./components/MessageDetails";
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";
import ListNav from "./components/ListNav";
import DetailsNav from "./components/DetailsNav";
import "./public/main.css"
import axios from "axios";
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
  const [chat, setChat] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    name: "Mehmet",
    imgUrl: "https://pps.whatsapp.net/v/t61.24694-24/294900264_1765275973847131_6493955095488304066_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVxIbATKQDD6kPMeF-9lokBz0IpQZU4A0AiuCA2JraqR5Q&oe=631673BD"
  })

  const chatDetail = async () => {
    var response: any = await axios.post('http://localhost:3000/message/chat', { userId: 2 }, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiTWVobWV0Iiwic3VybmFtZSI6IsOWenTDvHJrIiwiZW1haWwiOiJtZWhtZXQuenRyazIxMzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkNEZLU0I1RFVFcUhtUWZLY3ZtVXRnT0FRRzE4TGRPTFFGam54MkdBNlgyNlVnd1p3VkpmcGkiLCJpbWFnZVVybCI6Imh0dHBzOi8vcHBzLndoYXRzYXBwLm5ldC92L3Q2MS4yNDY5NC0yNC8yOTQ5MDAyNjRfMTc2NTI3NTk3Mzg0NzEzMV82NDkzOTU1MDk1NDg4MzA0MDY2X24uanBnP3N0cD1kc3QtanBnX3M5Nng5NiZjY2I9MTEtNCZvaD0wMV9BVnhJYkFUS1FERDZrUE1lRi05bG9rQnowSXBRWlU0QTBBaXVDQTJKcmFxUjVRJm9lPTYzMTY3M0JEIiwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yNFQxNDowNjoxOC42NzNaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yNFQxNDowNjoxOC42NzNaIn0sImlhdCI6MTY2MTM3MDc5NiwiZXhwIjoxNjYxMzc0Mzk2fQ.oLR4BheRSZ6TMKHNn_Gop_HH9bobpT2gXOk7ap035sQ`
      }
    });
    if (response.data.messages) {
      setChat(response.data.messages);
      console.log(response.data.messages);
    }
    else {
      console.log(response)
    }
  }

  const loadChats = async () => {
    var response: any = await axios.get('http://localhost:3000/message/list', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiTWVobWV0Iiwic3VybmFtZSI6IsOWenTDvHJrIiwiZW1haWwiOiJtZWhtZXQuenRyazIxMzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTIkNEZLU0I1RFVFcUhtUWZLY3ZtVXRnT0FRRzE4TGRPTFFGam54MkdBNlgyNlVnd1p3VkpmcGkiLCJpbWFnZVVybCI6Imh0dHBzOi8vcHBzLndoYXRzYXBwLm5ldC92L3Q2MS4yNDY5NC0yNC8yOTQ5MDAyNjRfMTc2NTI3NTk3Mzg0NzEzMV82NDkzOTU1MDk1NDg4MzA0MDY2X24uanBnP3N0cD1kc3QtanBnX3M5Nng5NiZjY2I9MTEtNCZvaD0wMV9BVnhJYkFUS1FERDZrUE1lRi05bG9rQnowSXBRWlU0QTBBaXVDQTJKcmFxUjVRJm9lPTYzMTY3M0JEIiwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yNFQxNDowNjoxOC42NzNaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yNFQxNDowNjoxOC42NzNaIn0sImlhdCI6MTY2MTM3MDc5NiwiZXhwIjoxNjYxMzc0Mzk2fQ.oLR4BheRSZ6TMKHNn_Gop_HH9bobpT2gXOk7ap035sQ`
      }
    });
    if (response.data.messages) {
      let messages = [{}];
      let first = true;
      for (const message of response.data.messages) {
        if (first) {
          console.log(message);
          messages.push(message);
          first = false;
        }
        else {
          let x = messages.filter((i: any) => (i.senderId != message.senderId));
          if (x) {
            console.log("x", x);

          }
        }

      }
      console.log(messages);
    }
    else {
      console.log(response)
    }
  }

  useEffect(() => {
    loadChats();
  }, []);

  return (
    <div style={{ maxHeight: "100vh" }}>
      <Grid container spacing={2} sx={{ backgroundColor: "#fffff" }}>
        <Grid item xs={3} sx={{ paddingTop: "0 !important" }}>
          <ListNav selectedUser={selectedUser}></ListNav>
          <Messages users={users} setSelectedUser={setSelectedUser}></Messages>
        </Grid>
        <Grid item xs={9} onClick={chatDetail} sx={{ backgroundColor: "#efeae2", paddingTop: "0 !important", paddingLeft: "0 !important" }}>
          <DetailsNav selectedUser={selectedUser}></DetailsNav>
          <MessageDetails chat={chat} userId={1}></MessageDetails>
          <NewMessage chatDetail={chatDetail}></NewMessage>
        </Grid>
      </Grid>
    </div>
  );
}

