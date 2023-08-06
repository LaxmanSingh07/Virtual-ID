import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ARRoom from "./Pages/ARRoom";
import DimRoom from "./Pages/DimRoom";
import ErrorPage from "./Pages/ErrorPage";
import Template from "./Pages/Template";

function App() {
  const routes = [
    { path: "/", page: <Home /> },
    { path: "/ar-room", page: <ARRoom /> },
    { path: "/2d-room", page: <DimRoom /> },
    { path: "*", page: <ErrorPage /> },
  ];

  return (
    <Router>
      <Routes>
        <Route element={<Template />}>
          {routes.map((route) => (
            <Route path={route.path} element={route.page} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
