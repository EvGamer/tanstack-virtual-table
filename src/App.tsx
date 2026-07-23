import { createRouter, RouterProvider } from '@tanstack/react-router'
import { rootRoute } from './routes/root'
import { flexTableRoute } from './routes/flexTable'

export const routeTree = rootRoute.addChildren([
  flexTableRoute,
])

// Set up a Router instance
const router = createRouter({ routeTree })

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  return <RouterProvider router={router} />
}

export default App
