import React from "react";
import { Button } from 'antd';
import { observer } from "mobx-react-lite";
import store from "./store/index";

const Home: React.FC = () => {
  return (
    <>
      <h1>欢迎来到首页！</h1>;<h2>计数器：{store.count}</h2>
      <Button type="primary" onClick={() => store.increment()}>增加</Button>
      <Button type="default" onClick={() => store.decrement()}>减少</Button>
    </>
  );
};

export default observer(Home);
