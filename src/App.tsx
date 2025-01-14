import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "@/routers/index";

function App() {
  const RouterPage = useRoutes(routes);
  return <>{RouterPage}</>;
}

export default App;
