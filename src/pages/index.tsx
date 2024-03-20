import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Stack } from "@mui/material";
import Header from "@/components/Header";
import Login from "@/components/Login";

export default function Home() {
  return (
    <Box>
      <Box>
        <Login />
      </Box>
    </Box>
  );
}
