import Link from "next/link";
import Layout from "../components/common/Layout";
// import Button from "@mui/material/Button";
import Button from "../components/common/buttons/index";
import { styled } from "@mui/system";

const IndexPage = () => (
  <Layout>
    <Button
      onClick={() => {
        alert("작동됩니다.");
      }}
    >
      MUI 연습버튼입니다요
    </Button>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;

const StButton = styled("button")({});
