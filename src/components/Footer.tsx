import { Box, Stack, Typography } from "@mui/material";
import Pinecone from "./logo/Pinecone";
import Twitter from "./logo/Twitter";

const Footer = () => {
  // const theme = useTheme();
  return (
    <>
      <Box
        width={"full"}
        bgcolor={"#18BA51"}
        padding={"119.5px"}
        color={"white"}
      >
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
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"8px"}
        >
          <Typography>© 2024 Pinecone Foods LLC </Typography>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"}>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Stack>
      </Box>
    </>
  );
};
export default Footer;
