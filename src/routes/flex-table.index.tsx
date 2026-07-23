import { ColumnDef } from "@tanstack/react-table";

import { memo } from "react";
import VirtualTableFlex from "../widget/virtual-table-flex/virtual-table-flex";
import { PEOPLE } from "../shared/mocks/people";
import TablePageLayout from "../shared/ui/table-page-layout/table-page-layout";
import { Person } from "../shared/types";
import { createFileRoute } from "@tanstack/react-router";


const COLUMNS: ColumnDef<Person>[] = [
  { accessorKey: "name", header: "Name", meta: { width: 100 } },
  { accessorKey: "surname", header: "Surname", meta: { width: 100 } },
  { accessorKey: "patronim", header: "Patronim", meta: { width: 100 } },
  { accessorKey: "age", header: "Age", meta: { width: 30 } },
  { 
    accessorKey: "isMale",
    header: "Sex",
    cell: (props) => props.getValue() ? "Male" : "Female",
    meta: { width: 50 }
  },
  {
    accessorKey: "maritalStatus",
    header: "Marital status",
    meta: { width: 100 }
  }
]

function TableFixedPage() {
  return (
    <TablePageLayout title="Flex table">
      <VirtualTableFlex<Person> columns={COLUMNS} data={PEOPLE} />
    </TablePageLayout>
  )
}

export const TableFixedPageMemo = memo(TableFixedPage);

export const Route = createFileRoute("/flex-table/")({
  component: TableFixedPageMemo,
});