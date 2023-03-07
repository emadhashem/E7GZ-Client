import { Container, Stack } from "@mui/material";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { RoleContext } from "../context/role/rolecontext";
import { userRole } from "../global/types";
import Admin from "../main/admin";
import User from "../main/user";

function Layout() {
  const { role } = useContext(RoleContext);
  return (
    <Container maxWidth="lg">
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        justifyContent={"space-between"}
      >
        <h1>E7GZ</h1>
        <h1>Logout</h1>
      </Stack>
      {role ? (
        role === userRole.admin ? (
          <Admin />
        ) : (
          <User />
        )
      ) : (
        <h1>Please login first</h1>
      )}
    </Container>
  );
}

export default Layout;
