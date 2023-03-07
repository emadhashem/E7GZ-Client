import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Container, Stack, TextField } from "@mui/material";

function RegisterPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate()
  return (
    <Container
    maxWidth="sm"
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: '80vh'
    }}
  >
    <Stack spacing={2} width={300}>
    <TextField
        value={name}
        onChange={(e) => setname(e.target.value)}
        label="Name"
        variant="outlined"
      />
      <TextField
        value={email}
        onChange={(e) => setemail(e.target.value)}
        label="Email"
        variant="outlined"
      />
      <TextField
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        label="Password"
        variant="outlined"
        type={"password"}
      />
      <Button >Register</Button>
      <Button onClick={() => navigate('/login')}>Already have account!</Button>
    </Stack>
  </Container>
  )
}

export default RegisterPage