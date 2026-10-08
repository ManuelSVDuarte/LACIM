import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/liga")({ component: LigaLayout });

function LigaLayout() {
  return <Outlet />;
}
