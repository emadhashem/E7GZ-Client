import { Button, Container, Stack, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../../../context/role/rolecontext";

function LoginPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {setRole} = useContext(RoleContext)
  const navigate = useNavigate()
  async function handleLogin() {
    setRole(email)
  }

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
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={() => navigate('/register')}>Register</Button>
      </Stack>
    </Container>
  );
}

export default LoginPage;
