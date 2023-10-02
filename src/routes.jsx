import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import VideoPlayingContainer from "./components/VideoPlayingContainer";
import Error from "./pages/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch/:id",
        element: <VideoPlayingContainer />,
      },
    ],
  },
]);

export default routes;
