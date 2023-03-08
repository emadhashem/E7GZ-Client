import { Box, Button, Container, Grid, Modal } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import GroupComp from "../groupComp/GroupComp";
import NewAppoinment from "../newAppoinmet/NewAppoinment";

function MyGroupsPage() {
  const [openModal, setopenModal] = React.useState(false);
  const handleopenModal = () => setopenModal(true);
  const handleCloseMOdal = () => setopenModal(false);
  return (
    <Container maxWidth="lg" >
      <Stack 
      justifyContent={'space-evenly'}
      width = "100%"
      direction={"row"}
      >
        <Button variant="contained" onClick={handleopenModal}>Add New Appoinment</Button>
        <Button onClick={() => {}}>Reservation for client</Button>
        <Button onClick={() => {}}>All pending reservation</Button>
      </Stack>
      <Modal open={openModal} onClose={handleCloseMOdal}>
        <NewAppoinment handleCancel={handleCloseMOdal} disableTitle={false} />
      </Modal>
      <Container maxWidth="md">
        <h3> My Groups </h3>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {[...Array(5)].map((_, idx) => (
            <Grid item md={4} sm={6} xs={12}>
              <GroupComp title={`${idx}-title`} count={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default MyGroupsPage;
