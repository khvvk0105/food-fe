import { Box, Stack, Typography, useTheme } from "@mui/material";
import Pattern from "@/components/logo/Pattern";

const Home = () => {
  const theme = useTheme();
  return (
    <Stack width={theme.breakpoints.values.xl} alignItems={"center"}>
      <Stack
        direction={`row`}
        width={theme.breakpoints.values.xl}
        bgcolor={theme.palette.primary.main}
        height={"788px"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"space-around"}
        overflow={"hidden"}
        spacing={10}
      >
        <Box position={"absolute"}>
          <Pattern />
        </Box>
        <Stack width={"384px"} height={"224px"} spacing={"23px"}>
          <Typography
            fontSize={"55px"}
            fontWeight={"600"}
            letterSpacing={"0.55px"}
            lineHeight={"90%"}
            color={"white"}
          >
            Pinecone Food delivery
          </Typography>
          <Box border={1} width={"383px"} borderColor={"white"}></Box>
          <Typography
            fontSize={"22px"}
            fontWeight={"700"}
            lineHeight={"120%"}
            letterSpacing={"0.22px"}
            color={"white"}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack width={"588px"} height={"438px"} position={"relative"}></Stack>
      </Stack>
    </Stack>
  );
};
export default Home;
