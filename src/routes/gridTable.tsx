import { ColumnDef } from "@tanstack/react-table";

import { PEOPLE } from "../shared/mocks/people";
import TablePageLayout from "../shared/ui/table-page-layout/table-page-layout";
import { Person } from "../shared/types";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";
import VirtualTableGrid from "../widget/virtual-table-grid/virtual-table-grid";


const COLUMNS: ColumnDef<Person>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "surname", header: "Surname" },
  { accessorKey: "patronim", header: "Patronim" },
  { accessorKey: "age", header: "Age" },
  { 
    accessorKey: "isMale",
    header: "Sex",
    cell: (props) => props.getValue() ? "Male" : "Female",
  },
  {
    accessorKey: "maritalStatus",
    header: "Marital status",
  }
]

export const gridTableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/grid-table",
  component: GridTablePage,
});

function GridTablePage() {
  return (
    <TablePageLayout title="Grid table">
      <VirtualTableGrid<Person> columns={COLUMNS} data={PEOPLE} />
    </TablePageLayout>
  )
}