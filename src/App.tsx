import { useEffect } from "react";
import apiClient from "@/api/apiClient.ts";
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
      <div className="bg-green-500 text-slate-300 text-center w-[100px] h-[100px]">
        Hello world!
      </div>
    </>
  );
}

export default App;
