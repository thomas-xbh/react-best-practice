import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import worker from "./_mock";

// css
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

worker.start({
  serviceWorker: {},
});
