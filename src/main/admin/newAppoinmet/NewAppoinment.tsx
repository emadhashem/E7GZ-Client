import { Box, Button, Container, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
function NewAppoinment({
  title,
  disableTitle,
  handleCancel
}: {
  title?: string;
  disableTitle: boolean;
  handleCancel : () => void
}) {
  const [start, setstart] = useState(new Date());
  const [end, setend] = useState(new Date());
  return (
    <Container
      sx={{
        backgroundColor: "white",
        height: "90%",
        maxWidth: "80%",
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        paddingTop: 5,
        overflowY: "scroll",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <TextField
        disabled={disableTitle}
        value={title}
        label="Group Name"
        variant="outlined"
      />
      <Box>
        <h5>Start</h5>
        <DateTimePicker value={start} onChange={setstart} />
      </Box>
      <Box>
        <h5>End</h5>
        <DateTimePicker value={end} onChange={setend} />
      </Box>
      <Box
        sx={{
          minWidth: "100%",
          height: 200,
          alignItems: "center",
          display: 'flex',
          flexDirection : 'column'
        }}
      >
        <h5>Description</h5>
        <textarea
          style={{
            minWidth: "80%",
            padding: 5,
            outline: 'none'
          }}
        />
      </Box>
      <Box>
        <Button>Submit</Button>
        <Button onClick={handleCancel} >Cancel</Button>
      </Box>
    </Container>
  );
}

export default NewAppoinment;
