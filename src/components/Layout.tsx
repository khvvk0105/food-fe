import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
