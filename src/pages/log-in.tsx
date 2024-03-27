import { Stack, Typography, Box, Button } from "@mui/material";
import Hide from "@/components/logo/Hide";
const logIn = () => {
  return (
    <Stack
      width={"448px"}
      height={"549px"}
      marginTop={"168px"}
      marginBottom={"78px"}
    >
      <Stack alignItems={"center"} justifyContent={"center"}>
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
          <Stack marginBottom={"4px"}>Имэйл </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"48px"}
            gap={"8px"}
            px={3}
            py={1}
            bgcolor={"#EEEFF2"}
            marginBottom={"16px"}
          >
            <Box
              border={"none"}
              component={"input"}
              bgcolor={"#EEEFF2"}
              width={"384px"}
              height={"48px"}
              placeholder="Имэйл хаягаа оруулна уу"
            ></Box>
          </Stack>
        </Stack>
        <Stack width={"384px"}>
          <Stack marginBottom={"4px"}>Нууц үг </Stack>
          <Stack
            direction={"row"}
            height={"48px"}
            alignItems={"center"}
            gap={"8px"}
            px={3}
            py={1}
            bgcolor={"#EEEFF2"}
            marginBottom={"8px"}
          >
            <Box
              border={"none"}
              component={"input"}
              width={"100%"}
              height={"48px"}
              bgcolor={"#EEEFF2"}
              placeholder="Нууц үг"
            ></Box>
            <Box>
              <Hide />
            </Box>
          </Stack>
        </Stack>
        <Stack marginBottom={"48px"} justifyItems={"flex-end"}>
          Нууц үг сэргээх
        </Stack>
        <Box width={"384px"} bgcolor={"#EEEFF2"} marginBottom={"32px"}>
          <Button fullWidth variant="outlined" disabled>
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
    </Stack>
  );
};
export default logIn;
