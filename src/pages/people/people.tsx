import { ColumnDef } from "@tanstack/react-table";
import { PEOPLE } from "./mocks/people";
import { Person } from "./types";

import style from "./people.module.css"
import { memo } from "react";
import VirtualTableFixed from "../../shared/ui/virtual-table-fixed/virtual-table-fixed";

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
    <div className={style.root}>
      <h1 className={style.header}>People</h1>
      <div className={style.contentContainer}>
        <div className={style.content}>
          <VirtualTableFixed<Person> columns={COLUMNS} data={PEOPLE} />
        </div>
      </div>
    </div>
  )
}

export default memo(PeoplePage);