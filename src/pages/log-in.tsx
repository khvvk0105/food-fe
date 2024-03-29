import { Stack, Typography, Box, Button, TextField } from "@mui/material";

const logIn = () => {
  return (
    <Stack
      width={"448px"}
      height={"549px"}
      marginTop={"168px"}
      marginBottom={"78px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography
        fontSize={"28px"}
        fontWeight={"700"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        marginBottom={"48px"}
      >
        Нэвтрэх
      </Typography>
      <Stack width={"384px"}>
        <Typography>Имэйл</Typography>
        <TextField
          id="filled-email-input"
          label="email"
          type="email"
          autoComplete="current-email"
          variant="filled"
        />
      </Stack>
      <Stack width={"384px"}>
        <Typography marginBottom={"4px"}>Нууц үг </Typography>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
      </Stack>
      <Stack marginBottom={"48px"} justifyItems={"flex-end"}>
        Нууц үг сэргээх
      </Stack>
      <Box width={"384px"} bgcolor={"#EEEFF2"} marginBottom={"32px"}>
        <Button fullWidth variant="outlined">
          Нэвтрэх
        </Button>
      </Box>
      <Typography marginBottom={"32px"}>Эсвэл</Typography>
      <Box width={"384px"} bgcolor={"#EEEFF2"}>
        <Button fullWidth variant="outlined">
          Бүртгүүлэх
        </Button>
      </Box>
    </Stack>
  );
};
export default logIn;
