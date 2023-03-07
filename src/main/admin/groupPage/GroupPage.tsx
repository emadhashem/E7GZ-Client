import { Box, Button, Container, Divider, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function GroupPage() {
  const { title } = useParams<{ title: string }>();
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          width: "50%",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h3>ADD NEW APPOINMENT</h3>
        <Button>ADD</Button>
      </Box>
      <Container maxWidth="lg">
        <Divider />
        <Grid container>{/* appoinment arr */}</Grid>
      </Container>
    </Container>
  );
}

export default GroupPage;
