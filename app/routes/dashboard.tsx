import { Outlet } from "react-router";

export default function DashBoard() {
  return (
    <div>
      Welcome to the DashBoard page. <Outlet />
    </div>
  );
}
