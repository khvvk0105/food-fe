import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
