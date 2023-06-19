import Layout from "../components/common/Layout";
import Button from "../components/common/buttons/index";
import Link from "next/link";
import { styled } from "@mui/system";
import { useEffect } from "react";
import app from "../components/common/firebase";

const IndexPage = () => {
  useEffect(() => {
    console.log("app", app);
  }, []);

  return (
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
};

export default IndexPage;

const StButton = styled("button")({});
