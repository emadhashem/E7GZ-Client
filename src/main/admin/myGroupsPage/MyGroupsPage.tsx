import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import GroupComp from '../groupComp/GroupComp'

function MyGroupsPage() {
  return (
    <Container maxWidth = "lg" >
      <Container maxWidth = "md"  >
        <h3> My Groups </h3>
      </Container>
      <Container maxWidth = "md" >
      <Grid container spacing={2}>
        {
          [...Array(5)].map((_, idx) => (
            <Grid item  md ={4} sm={6} xs={12} >
              <GroupComp title={`${idx}-title`} count = {idx} />
            </Grid>
          ))
        }
      </Grid>
      </Container>
    </Container>
  )
}

export default MyGroupsPage