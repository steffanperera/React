import { Stack, Button } from "@mui/material";

import React from "react";

const MuiButton = () => {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
};

export default MuiButton;
