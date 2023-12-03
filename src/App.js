import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./Components/Topbar/Topbar";
import Sidbar from "./Components/Sidbar/Sidbar";

function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidbar />
        {router}
      </div>
    </>
  );
}

export default App;
