import Link from "next/link";
import Layout from "../components/common/Layout";

const AboutPage = () => (
  <Layout title="수정시 변경 가능">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default AboutPage;
