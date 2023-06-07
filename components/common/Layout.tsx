import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { styled } from "@mui/system";
import { Height } from "@mui/icons-material";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Twogather" }: Props) => (
  <StyledDiv>
    <StFrame>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header></header>
      {children}
      <footer>
        <hr />
        <nav>
          <Link href="/">Home일거야?</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/users">유저리스트??!!!?</Link> | <a href="/api/users">Users API</a>
        </nav>
      </footer>
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
  width: "20vw",
  height: "80vh",
  background: "white",
}));
