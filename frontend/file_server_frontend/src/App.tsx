import "./App.css";

import Auth_container_temp from "./containers/Auth_container_temp";
import Auth_signup from "./components/Auth_signup";
import Auth_signin from "./components/Auth_signin";

import {
  createBrowserRouter,
  Route,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import HompageTemplate from "./containers/HompageTemplate";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route>
        <Route path="/" element={<HompageTemplate />}></Route>
        <Route path="auth-account/" element={<Auth_container_temp />}>
          <Route path="sign-up" element={<Auth_signup />} />
          <Route path="sign-in" element={<Auth_signin />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
