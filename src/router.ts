import { createRouter } from "@tanstack/react-router"
import { flexTableRoute } from "./routes/flexTable"
import { gridTableRoute } from "./routes/gridTable"
import { rootRoute } from "./routes/root"

const routeTree = rootRoute.addChildren([
  gridTableRoute,
  flexTableRoute,
])

export const router = createRouter({ routeTree })

export type AppRouter = typeof router;
