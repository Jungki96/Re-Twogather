import { useState } from "react";
import Layout from "../../components/common/Layout";

type Props = {
  children: string;
};

// type Information = { name: string; description: string };
// const [info, setInformation] = useState<Information | null>(null);

// 왜 빨간 줄이 나오는데 작동이 되는거지?
const children: Props = "왜?";

const First: React.FC = () => (
  <Layout>
    {children}
    <div>
      <div>
        제목 <input onClick={() => setInformation()} />
      </div>
      <div>
        할일 <input />
      </div>
    </div>
  </Layout>
);

export default First;
