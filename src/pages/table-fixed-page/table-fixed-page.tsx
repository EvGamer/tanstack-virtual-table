import { ColumnDef } from "@tanstack/react-table";

import { memo } from "react";
import VirtualTableFixed from "../../widget/virtual-table-fixed/virtual-table-fixed";
import { PEOPLE } from "../../shared/mocks/people";
import TablePageLayout from "../../shared/ui/table-page-layout/table-page-layout";
import { Person } from "../../shared/types";

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

function PeoplePage() {
  return (
    <TablePageLayout title="Flex table">
      <VirtualTableFixed<Person> columns={COLUMNS} data={PEOPLE} />
    </TablePageLayout>
  )
}

export default memo(PeoplePage);