import { Box, FormControl, FormGroup, Stack, Typography } from "@mui/material";
import TextField from "@mui/material";

import React from "react";
const signUp = () => {
  return (
    <Stack width={"448px"} height={"722px"}>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography>Бүртгүүлэх</Typography>
        <Stack>
          <FormGroup>
            <FormControl>
              <Typography fontSize={"14px"}>Нэр </Typography>
              <TextField
                sx={{
                  backgroundColor: "#F7F7F8",
                }}
                fullWidth
                placeholder="Нэрээ оруулна уу"
              />
            </FormControl>
          </FormGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default signUp;
