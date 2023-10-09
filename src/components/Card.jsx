import React from "react";
import { CardMedia, Grid, Stack } from "@mui/material";
import { InformationCard } from "./InformationCard";
import { DescriptionCard } from "./DescriptionCard";
export const Card = ({ data }) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 5 }}>
      <Grid item xs={3}>
        <CardMedia
          component={"img"}
          image={data.avatar_url}
          alt="avatar"
          sx={{ borderRadius: "50%", marginLeft: "10px" }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction={"column"}
          spacing={1}
          sx={{
            margin: "20px",
          }}
        >
          <InformationCard userGit={data} />
          <DescriptionCard userGit={data} />
        </Stack>
      </Grid>
    </Grid>
  );
};
