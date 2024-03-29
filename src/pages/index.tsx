import { Box, Stack, Typography, useTheme } from "@mui/material";
import Pattern from "@/components/logo/Pattern";

import { controlCardsData, meals } from "@/utils/dummyData";

const Home = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Stack width={theme.breakpoints.values.xl} alignItems={"center"}>
      <Stack
        width={theme.breakpoints.values.xl}
        bgcolor={theme.palette.primary.main}
        alignItems={"center"}
      >
        <Stack
          width={theme.breakpoints.values.lg}
          direction={`row`}
          height={"788px"}
          position={"relative"}
          alignItems={"center"}
          justifyContent={"space-between"}
          overflow={"hidden"}
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
          <Stack width={"588px"} height={"438px"} position={"relative"}>
            <img
              src="hool1.png"
              alt="hool1.png"
              width={"443px"}
              height={"438px"}
            />
            <Box position={"absolute"} top={"110px"} left={"280px"}>
              <img
                src="hool2.png"
                alt="hool2.png"
                width={"313px"}
                height={"313px"}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={theme.breakpoints.values.lg}
        spacing={"47px"}
        direction={"row"}
        justifyContent={"center"}
        my={15}
      >
        {controlCardsData.map((e, key) => {
          return (
            <Stack
              spacing={"15px"}
              justifyContent={"center"}
              p={4}
              border={1}
              borderRadius={4}
              borderColor={"#D6D8DB"}
              boxShadow={3}
              key={key}
            >
              <Box>{e.svg}</Box>
              <Stack spacing={1}>
                <Typography fontSize={"18px"} fontWeight={"700"}>
                  {e.title}
                </Typography>
                <Typography fontSize={"14px"}>{e.detail}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
      <Stack>
        {meals.map((e, key) => {
          return (
            <Stack key={key}>
              <Box display={"flex"} gap={"20px"}>
                <Box>{e.logo}</Box>
                <Box width={"1039px"} fontSize={"22px"} fontWeight={"700"}>
                  {e.title}
                </Box>
                <Box color={theme.palette.primary.main}>{e.title2}</Box>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
export default Home;
