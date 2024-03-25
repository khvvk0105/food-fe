import { Box, Stack, Typography, Container, useTheme } from "@mui/material";

import Pinecone from "./logo/Pinecone";
import SearchLogo from "./logo/SearchLogo";
import SagsLogo from "./logo/SagsLogo";
import SignUpLogo from "./logo/SignUpLogo";
// import { light, dark } from "@mui/material/styles/createPalette";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

const Header = () => {
  const theme = useTheme();
  return (
    <>
      <Container maxWidth={"lg"}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
          width={"100%"}
          height={"57px"}
          paddingTop={"16px"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"40px"}
          >
            <Typography color={theme.palette.primary.main}>
              <Pinecone />
            </Typography>
            <Typography color={theme.palette.primary["main"]}>Нүүр</Typography>
            <Typography>Хоолны цэс</Typography>
            <Typography>Хүргэлтийн бүс</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={"8px"}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                border={1}
                borderRadius={"10px"}
                px={3}
                py={1}
              >
                <SearchLogo />
                <Box
                  border={"none"}
                  component={"input"}
                  placeholder="Хайх"
                ></Box>
              </Stack>
              <Stack
                direction={"row"}
                gap={"8px"}
                height={"40px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <SagsLogo />
                <Typography>Сагс</Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                gap={"8px"}
                height={"40px"}
                alignItems={"center"}
              >
                <SignUpLogo />
                <Typography>Нэвтрэх</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
export default Header;
