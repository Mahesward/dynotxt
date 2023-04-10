import "./App.css";
import NavBar from "./components/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ThemeProvider, createTheme } from "@mui/material";
import Settings from "./pages/Settings";
import AccountSettings from "./components/AccountSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "account",
            element: <AccountSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
]);

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
