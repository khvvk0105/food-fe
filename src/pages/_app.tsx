import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CustomThemeProvider from "../utils/CustomThemeProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomThemeProvider>
  );
};

export default App;
