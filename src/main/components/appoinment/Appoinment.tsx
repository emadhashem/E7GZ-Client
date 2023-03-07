import { Box, Container } from "@mui/material";
import React from "react";
import { IAppoinmentProps } from "./types";
import Clock from "react-clock";
import './style.css'

function Appoinment({
  title,
  id,
  msg,
  hideTitle,
  start,
  end,
}: IAppoinmentProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: 15,
        width  :'100%',
        flexDirection : 'column',
        alignItems : 'center',
        marginTop : 5
      }}
    >
      <Box>{hideTitle && <p>{title}</p>}</Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "70%",
        }}
      >
        <Clock className="clock" value={start} />
        {`==>`}
        <Clock className="clock" value={end} />
      </Box>
      <Box>
        <p>{msg}</p>
      </Box>
    </Box>
  );
}

export default Appoinment;
