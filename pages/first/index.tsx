import Layout from "../../components/common/Layout";

type Props = {
  children: string;
};

const First = ({ children }: Props) => (
  <Layout>
    <div>
      <input />
    </div>
  </Layout>
);

export default First;
