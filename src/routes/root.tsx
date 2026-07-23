import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function RootPage() { 
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export const rootRoute = createRootRoute({ component: RootPage }); 