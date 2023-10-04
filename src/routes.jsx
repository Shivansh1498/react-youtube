import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import VideoPlayingContainer from "./components/VideoPlayingContainer";
import Error from "./pages/Error";
import Body from "./components/Body";
import Header from "./components/Header";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
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
