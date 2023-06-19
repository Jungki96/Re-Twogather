import Layout from "../../components/common/Layout";

type Props = {
  children: string;
};

// 왜 빨간 줄이 나오는데 작동이 되는거지?
const children: Props = "왜?";

const First: React.FC = () => (
  <Layout>
    {children}
    <div>
      <input />
    </div>
  </Layout>
);

export default First;
