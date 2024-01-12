import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home"
import { RegisterContacts } from "./pages/RegisterContacts"
import GlobalStyles from "./styles/global"
import { ContactsProvider } from "./contexts/ContactsContext"

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
    <ContactsProvider>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ContactsProvider>
  )
}
