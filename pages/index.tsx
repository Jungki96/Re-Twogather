import Link from "next/link";
import Layout from "../components/common/Layout";
// import Button from "@mui/material/Button";
import Button from "../components/common/buttons/index";

const IndexPage = () => (
  <Layout>
    <Button
      onClick={() => {
        console.log("안뇽");
      }}
    >
      MUI 연습버튼
    </Button>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">AboutS</Link>
    </p>
  </Layout>
);

export default IndexPage;
