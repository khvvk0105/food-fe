import { Box, Stack, Typography } from "@mui/material";

const homeFace = () => {
  return (
    <Box display={"flex"} maxWidth={"lg"} height={"788px"}>
      <Stack alignItems={"center"} justifyContent={"center"} width={"340px"}>
        <Typography fontSize={"55px"} fontWeight={"700px"}>
          Pinecone Food delivery
        </Typography>
        <Typography height={"64px"} fontSize={"22px"}>
          Horem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Stack>
      <Stack>
        <Box
          component={"img"}
          src="hool1.png"
          width={"443px"}
          height={"438px"}
        ></Box>
        <Box
          component={"img"}
          src="hool2.png"
          width={"313px"}
          height={"313px"}
        ></Box>
      </Stack>
    </Box>
  );
};
export default homeFace;
