import React, { useState } from "react";
import Layout from "../../components/common/Layout";

// 왜 빨간 줄이 나오는데 작동이 되는거지?
// const children: Props = "왜?";

type Props = {
  children: string;
  information: string[];
};



const First: React.FC<Props> = () => {

  const initialData = {
    title: "",
    desc: "",
  };
  
  const [init, setInit] = useState(initialData);
  
  const submitBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setInit({ ...init, [name]: value });
  }

  return(
    <div>
          <Layout>
            <form>
              <div>
                제목 <input name="title" onChange={submitBtn} />
              </div>
              <div>
                할일 <input name="desc" onChange={submitBtn} />
              </div>
              <button>제출</button>
            </form>
      </Layout>
    </div>
    );
  }

export default First;
