import EventEdit from "./EventEdit/EventEdit";
import Events from "./Events";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";  

export default function Content() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Events />,
        },
        {
          path: "/edit/:id",
          element: <EventEdit />,
        },
      ]);


    return (
        <main className="h-full">
            <RouterProvider router={router} />
        </main>
    );
}