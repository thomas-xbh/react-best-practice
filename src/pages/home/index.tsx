import React from "react";
import { observer } from "mobx-react-lite";
import store from "@/store/index";

const Home: React.FC = () => {
  return (
    <>
      <h1>欢迎来到首页！</h1>;<h2>计数器：{store.count}</h2>
      <button onClick={() => store.increment()}>增加</button>
      <button onClick={() => store.decrement()}>减少</button>
    </>
  );
};

export default observer(Home);
