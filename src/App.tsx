import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import openSocket from 'socket.io-client';
import DetailsNav from "./components/DetailsNav";
import ListNav from "./components/ListNav";
import MessageDetails from "./components/MessageDetails";
import Messages from "./components/Messages";
import NewMessage from "./components/NewMessage";
import Login from "./Login";
import "./public/main.css";

export default function () {
  const [loggedIn, setLoggedIn] = useState(false);
  const [chat, setChat]: any = useState([]);
  const [chatUser, setChatUser]: any = useState({});
  const [selectedUser, setSelectedUser]: any = useState({})
  const [chats, setChats] = useState([]);
  const [token, setToken] = useState("");
  const chatDetail = async () => {
    console.log("detaişl")
    if (chatUser.id) {
      var response: any = await axios.post('http://localhost:3000/message/chat', { userId: chatUser.id }, {
        headers: {
          Authorization: `Bearer ` + token
        }
      });
      if (response.data.messages) {
        setChat(response.data.messages);
        loadChats();
      }
      else {
        console.log("error")
      }
    }
  };
  const clearAll = async () => {
    setChatUser({});
    setSelectedUser({});
  }
  const autoLogOut = async () => {
    clearAll();
    setLoggedIn(false);
    localStorage.clear();
    return (
      <Login />
    )
  }
  const loadChats = async () => {
    if (localStorage.getItem("loggedIn") == "true") {
      var response: any = await axios.get('http://localhost:3000/message/list', {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("token")
        }
      });
      if (response.data) {
        setChats(response.data.messages);
        userInfo();
      }
      else {
        console.log("error")
      }
    }
  }
  const userInfo = async () => {
    var response: any = await axios.post('http://localhost:3000/admin/getUser', {
      token: localStorage.getItem("token")
    });
    if (response.data) {
      setSelectedUser(response.data.user);
    }
    else {

    }
  }
  let tkn: any;
  useEffect(() => {
    const expiryDate: any = localStorage.getItem('expiryDate');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    tkn = localStorage.getItem("token");
    setToken(tkn != null ? tkn : "");
    setLoggedIn(localStorage.getItem("loggedIn") == "true" ? true : false);
    if (remainingMilliseconds > 0) {
      const remainingMillisecondsNew = 60 * 60 * 1000;
      const expiryDateNew = new Date(
        new Date().getTime() + remainingMillisecondsNew
      );
      localStorage.setItem("expiryDate", expiryDateNew.toISOString());
      loadChats();
    }
    else {
      autoLogOut();
    }

  }, []);

  useEffect(() => {
    chatDetail();
  }, [chatUser])

  useEffect(() => {
    loadChats();
  }, [token])
  let temp = true;
  useEffect(() => {
    const socket = openSocket('http://localhost:3000');
    socket.on('posts', data => {
      if (data.action === 'create') {
        temp = false
        addPost(data.msg);
      }
       else if (data.action === 'delete') {
        chatDetail();
      }
    });

  }, [selectedUser]);

  const addPost = (message: any) => {
    chatDetail();
    temp = true;
  }
  return (
    <>
      {loggedIn && temp ? (
        <>
          <div style={{ maxHeight: "100vh" }}>
            <Grid container spacing={2} sx={{ backgroundColor: "#fffff" }}>
              <Grid item xs={3} sx={{ paddingTop: "0 !important" }}>
                <ListNav selectedUser={selectedUser} setLoggedIn={setLoggedIn} clearAll={clearAll}></ListNav>
                <Messages setSelectedUser={setSelectedUser} loadChats={loadChats} chats={chats} setChatUser={setChatUser} loggedIn={loggedIn} ></Messages>
              </Grid>
              <Grid item xs={9} sx={{ backgroundColor: "#efeae2", paddingTop: "0 !important", paddingLeft: "0 !important" }}>
                {Object.keys(chatUser).length != 0 ? (
                  <>
                    <DetailsNav selectedUser={selectedUser} chatUser={chatUser}></DetailsNav>
                    <MessageDetails chat={chat} chatDetail={chatDetail} chatUser={chatUser} currentUser={selectedUser.id} token={token}></MessageDetails>
                    <NewMessage chatDetail={chatDetail} token={token} chatUser={chatUser}></NewMessage>
                  </>

                ) : (
                  <>
                    <p style={{ textAlign: "center" }}>
                      <img style={{ marginTop: "2rem" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Google_Chat_icon_%282020%29.svg/736px-Google_Chat_icon_%282020%29.svg.png" alt="img" />
                    </p>
                  </>
                )}
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <Login setToken={setToken} setLoggedIn={setLoggedIn} setSelectedUser={setSelectedUser} />
      )}
    </>
  );
}

