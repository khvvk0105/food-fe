import { Box, Stack, Typography } from "@mui/material";
import Pen from "@/components/logo/Pen";
import SignUpLogo2 from "@/components/logo/SignUpLogo2";
import Call from "@/components/logo/Call";
import Email from "@/components/logo/Email";
import Refresh from "@/components/logo/Refresh";
import Logout from "@/components/logo/Logout";

const user = () => {
  return (
    <Stack width={"432px"} height={"617px"} alignItems={"center"}>
      <Box display={"flex"} flexDirection={"column"} position={"relative"}>
        <Box position={"absolute"} top={"80px"} left={"100px"}>
          <Pen />
        </Box>
        <Stack
          component={"img"}
          src="Photo.png"
          width={"120px"}
          height={"120px"}
          marginBottom={"40px"}
        ></Stack>
        <Typography fontSize={"28px"} fontWeight={"700"}>
          УгтахБаяр
        </Typography>
      </Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingInline={"20px"}
        gap={"10px"}
        paddingTop={"8px"}
        paddingBottom={"8px"}
        bgcolor={"#F6F6F6"}
        marginBottom={"16px"}
        borderRadius={"10px"}
      >
        <SignUpLogo2 />
        <Box width={"264px"}>
          <Typography>Таны нэр</Typography>
          <Typography>УгтахБаяр</Typography>
        </Box>
        <Pen />
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingInline={"20px"}
        gap={"10px"}
        paddingTop={"8px"}
        paddingBottom={"8px"}
        bgcolor={"#F6F6F6"}
        marginBottom={"16px"}
        borderRadius={"10px"}
      >
        <Call />
        <Box width={"264px"}>
          <Typography>Утасны дугаар</Typography>
          <Typography>99837744</Typography>
        </Box>
        <Pen />
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingInline={"20px"}
        gap={"10px"}
        paddingTop={"8px"}
        paddingBottom={"8px"}
        bgcolor={"#F6F6F6"}
        marginBottom={"16px"}
        borderRadius={"10px"}
      >
        <Email />
        <Box width={"264px"}>
          <Typography>Имэйл хаяг</Typography>
          <Typography>Ugtakhbayr@gmail.com</Typography>
        </Box>
        <Pen />
      </Stack>
      <Box
        width={"432px"}
        display={"flex"}
        alignItems={"center"}
        paddingInline={"20px"}
        gap={"10px"}
        paddingTop={"8px"}
        paddingBottom={"8px"}
        marginBottom={"16px"}
      >
        <Refresh />
        <Typography>Захиалгын түүх</Typography>
      </Box>
      <Box
        width={"432px"}
        display={"flex"}
        alignItems={"center"}
        paddingInline={"20px"}
        gap={"10px"}
        paddingTop={"8px"}
        paddingBottom={"8px"}
      >
        <Logout />
        <Typography>Гарах</Typography>
      </Box>
    </Stack>
  );
};
export default user;
