import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

import Pinecone from "./logo/Pinecone";
import SearchLogo from "./logo/SearchLogo";
import SagsLogo from "./logo/SagsLogo";
import SignUpLogo from "./logo/SignUpLogo";

const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container>
        <Stack
          p={2}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
        >
          <Toolbar>
            <Stack direction={"row"} spacing={4}>
              <Pinecone />
              <Stack direction={"row"} spacing={4}>
                {pages.map((a, key) => {
                  return <Box key={key}>{a}</Box>;
                })}
              </Stack>
            </Stack>
          </Toolbar>
          <Stack
            direction={"row"}
            alignItems={"center"}
            bgcolor={"white"}
            borderRadius={"8px"}
            width={228}
            px={"16px"}
            py={"4px"}
            gap={2}
          >
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
              border={1}
              borderRadius={"10px"}
              px={3}
              py={1}
            >
              <SearchLogo />
              <Box border={"none"} component={"input"} placeholder="Хайх"></Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} px={2} gap={1}>
              <SagsLogo />
              <Typography>Сагс</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} px={2} gap={1}>
              <SignUpLogo />
              <Typography>Нэвтрэх</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
export default Header;
