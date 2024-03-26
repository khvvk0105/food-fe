import { Box, Stack, Typography, useTheme } from "@mui/material";
import Pinecone from "./logo/Pinecone";
import Twitter from "./logo/Twitter";
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
          <Typography>Нүүр</Typography>
          <Typography>Холбоо барих</Typography>
          <Typography>Хоолны цэс</Typography>
          <Typography>Үйлчилгээний нөхцөл</Typography>
          <Typography>Хүргэлтийн бүс</Typography>
          <Typography>Нууцлалын бодлого</Typography>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"20px"}
          marginBottom={"80px"}
        >
          <Typography>fb</Typography>
          <Typography>insta</Typography>
          <Typography width={"35px"} height={"45px"}>
            <Twitter />
          </Typography>
        </Stack>
        <Stack alignItems={"center"} marginBottom={"8px"}>
          <Typography>© 2024 Pinecone Foods LLC </Typography>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Footer;
