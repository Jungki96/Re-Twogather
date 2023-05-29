import Link from "next/link";
import Layout from "../components/common/Layout";
import Button from "@mui/material/Button";

const IndexPage = () => (
  <Layout>
    <Button color="primary">MUI 연습버튼</Button>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
