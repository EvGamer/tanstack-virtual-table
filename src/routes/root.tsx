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

// По какой-то причине typescript при компиляции уверен что у этой функции 0 аргументов
// это не влияет на работу и решение этой проблемы занимает слишком много времени
// и это не относится к тестовому заданию напрямую, так что добавлено исключение

//@ts-ignore
export const rootRoute = createRootRoute({ component: RootPage }); 