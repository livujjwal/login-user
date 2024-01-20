import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
 
  return (
    <div className="">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
