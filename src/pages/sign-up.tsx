import { Box, Stack } from "@mui/material";
import TextField from "@mui/material";

const signUp = () => {
  return (
    <Stack width={"448px"} height={"722px"}>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Box>Бүртгүүлэх</Box>
        <Box>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Stack>
    </Stack>
  );
};
export default signUp;
