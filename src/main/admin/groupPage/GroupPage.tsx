import { Box, Button, Container, Divider, Grid, Modal } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Appoinment from "../../components/appoinment/Appoinment";
import NewAppoinment from "../newAppoinmet/NewAppoinment";

function GroupPage() {
  const { title } = useParams<{ title: string }>();
  const [openModal, setopenModal] = React.useState(false);
  const handleopenModal = () => setopenModal(true);
  const handleCloseMOdal = () => setopenModal(false);
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
        <Button onClick={handleopenModal}>ADD</Button>
        <Modal open={openModal} onClose={handleCloseMOdal}>
          <NewAppoinment
            handleCancel={handleCloseMOdal}
            disableTitle={false}
            title={title!}
          />
        </Modal>
      </Box>
      <Container
        maxWidth="lg"
      >
        <Divider />
        <Grid container spacing={3}>
          {[...Array(6)].map((_, idx) => (
            <Grid lg = {6} xs = {12} item>
              <Appoinment
                title="this title"
                msg="this is description for this appoinment "
                id={idx + ""}
                start={new Date()}
                end={new Date()}
                hideTitle={false}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default GroupPage;
