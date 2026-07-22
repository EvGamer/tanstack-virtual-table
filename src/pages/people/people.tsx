import { ColumnDef } from "@tanstack/react-table";
import { PEOPLE } from "./mocks/people";
import { Person } from "./types";
import Table from "../../shared/ui/table/table";

import style from "./people.module.css"
import { memo } from "react";

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

function PeoplePage() {
  return (
    <div className={style.root}>
      <h1 className={style.header}>People</h1>
      <div className={style.contentContainer}>
        <div className={style.content}>
          <Table<Person> columns={COLUMNS} data={PEOPLE} />
        </div>
      </div>
    </div>
  )
}

export default memo(PeoplePage);