import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Delete(props: any) {
    const removeItem = async () => {
        console.log(props.deleted);
        props.setOpen(false);
        var response:any=await axios.post("http://localhost:3000/message/delete/"+props.deleted,{},{
            headers:{
                Authorization:"Bearer "+props.token
            }
        });
        if(response.status<400)
            props.chatDetail();
    };
    return (
        <div>

            <Dialog
                open={props.open}
                onClose={() => props.setOpen(false)}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Mesaj Sil
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{wordWrap:"break-word"}}>
                        "{props.msg.length > 30 ? props.msg.slice(0, 30) + "..." : props.msg}"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => props.setOpen(false)}>
                        Vazgeç
                    </Button>
                    <Button onClick={removeItem}>Sil</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}
