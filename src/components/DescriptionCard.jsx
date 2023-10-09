import { Stack, Typography } from "@mui/material";
import React from "react";
import { PaperInformation } from "./PaperInformation";
import { LocationInformation } from "./LocationInformation";

export const DescriptionCard = ({ userGit }) => {
  const { bio } = userGit;
  return (
    <>
      <Stack sx={{ justifyContent: "center" }}>
        <Typography variant="body1">
          {bio}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor
          nihil ratione odit, consequuntur possimus ipsam alias at quis quas
          libero optio ipsa illum! Atque voluptatibus nemo in itaque eum. */}
        </Typography>

        <PaperInformation userGit={userGit} />
        <LocationInformation userGit={userGit} />
      </Stack>
    </>
  );
};
