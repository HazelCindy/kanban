import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BreadCrumb() {
  // const route = useRouter();
  const routes = ["Dashboard", "Kanban"];

  return (
    <Breadcrumbs>
      {routes?.map((route) => (
        <Link
          underline="hover"
          key={route}
          color="inherit"
          href={`/${route.toLowerCase()}`}
        >
          {route}
        </Link>
      ))}
    </Breadcrumbs>
  );
}
export default BreadCrumb;
