import { Box, Stack, Typography, useTheme } from "@mui/material";
import FaceBookLogo from "./logo/FaceBookLogo";
import InstragramLogo from "./logo/InstragramLogo";
import TwitterLogo from "./logo/TwitterLogo";
import Pinecone from "./logo/Pinecone";
import Pattern from "./logo/Pattern";

const Footer = () => {
  const theme = useTheme();
  return (
    <Stack
      width={theme.breakpoints.values.xl}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        width={"100%"}
        height={"545px"}
        bgcolor={"#18BA51"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
        flexShrink={0}
        position={"relative"}
      >
        <Box position={"absolute"}>
          <Pattern />
        </Box>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"8px"}
          marginBottom={"40px"}
        >
          <Pinecone />
          <Typography>Food Delivery</Typography>
        </Stack>
        <Stack
          direction={"row"}
          width={"1200px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={"40px"}
        >
          <Typography borderBottom={"1px solid white"}>Нүүр</Typography>
          <Typography borderBottom={"1px solid white"}>Холбоо барих</Typography>
          <Typography borderBottom={"1px solid white"}>Хоолны цэс</Typography>
          <Typography borderBottom={"1px solid white"}>
            Үйлчилгээний нөхцөл
          </Typography>
          <Typography borderBottom={"1px solid white"}>
            Хүргэлтийн бүс
          </Typography>
          <Typography borderBottom={"1px solid white"}>
            Нууцлалын бодлого
          </Typography>
        </Stack>
        <Stack
          display={"flex"}
          direction={"row"}
          gap={"18px"}
          marginBottom={"40px"}
        >
          <FaceBookLogo />
          <InstragramLogo />
          <TwitterLogo />
        </Stack>
        <Stack
          width={"1200px"}
          height={"1px"}
          sx={{
            backgroundColor: "white",
          }}
          marginBottom={"40px"}
        ></Stack>
        <Stack alignItems={"center"} marginBottom={"8px"}>
          <Typography>© 2024 Pinecone Foods LLC </Typography>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Footer;
