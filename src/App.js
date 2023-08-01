import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Head from "./Head.js";
import Body from "./Body.js";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
