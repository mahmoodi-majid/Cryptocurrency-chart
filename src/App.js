import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Topbar />
      {router}
    </>
  );
}

export default App;
