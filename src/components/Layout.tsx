import { Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack>
      <Header />
      <Stack justifyContent={"center"} alignItems={"center"}>
        {children}
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Footer />
      </Stack>
    </Stack>
  );
};

export default Layout;
