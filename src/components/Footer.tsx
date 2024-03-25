import { Box, Stack, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box position={"absolute"} bgcolor={"#18BA51"}>
        <Box width={"100%"} height={"100px"}></Box>
      </Box>
    </>
  );
};
export default Footer;
