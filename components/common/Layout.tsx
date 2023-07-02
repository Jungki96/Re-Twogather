import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { styled } from "@mui/system";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <StyledDiv>
    <StFrame>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Link href="/">Home</Link> | <Link href="/first">기초?!</Link>
      </header>
      {children}
      {/* <footer></footer> */}
    </StFrame>
  </StyledDiv>
);

export default Layout;

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(/asset/image/background.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: "none",
  },
}));

const StFrame = styled("div")(() => ({
  width: "450px",
  height: "80vh",
  background: "white",
}));

const StTitle = styled("div")(() => ({
  fontSize: "14px",
}));
