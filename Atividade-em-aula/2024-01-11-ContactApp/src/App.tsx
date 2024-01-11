import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home"
import { RegisterContacts } from "./pages/RegisterContacts"
import GlobalStyles from "./styles/global"

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <RegisterContacts />,
      },
    ],
    errorElement: <div>Erro</div>,
  },
])

export function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  )
}
