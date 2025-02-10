import { useEffect } from "react";
import apiClient from "./api/apiClient";
function App() {
  useEffect(() => {
    // userService.();
  });

  const handleClick = () => {
    apiClient.get({ url: "/api/user" }).then((res) => {
      console.log(res, "res");
    });
  };

  return (
    <>
      <span>app</span>
      <button onClick={handleClick}>发请求</button>
    </>
  );
}

export default App;
