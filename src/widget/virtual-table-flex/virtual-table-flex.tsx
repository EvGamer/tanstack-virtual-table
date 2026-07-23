import { ColumnDef, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { HasId } from "../../shared/types";
import { useVirtualizer } from "@tanstack/react-virtual";
import { CSSProperties, memo, ReactElement, useRef } from "react";
import { ROW_HEIGHT } from "./constants";

import styles from "./virtual-table-flex.module.css";
import { createCellWidthStyle } from "./utils";

export type VirtualTableFlexProps<TData extends HasId> = {
  data: TData[];
  columns: ColumnDef<TData>[];
}

function VirtualTableFlex<TData extends HasId>(props: VirtualTableFlexProps<TData>) {
  const { data, columns } = props;

  const tableContentRef = useRef<HTMLDivElement | null>(null);

  const table = useReactTable<TData>({ 
    data,
    columns,
    getCoreRowModel: (table) => getCoreRowModel<TData>()(table), 
  })

  const rows = table.getRowModel().flatRows

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContentRef.current,
    estimateSize: () => ROW_HEIGHT
  });

  const contentScrollSize = rowVirtualizer.getTotalSize();
  const virtualItems = rowVirtualizer.getVirtualItems();

  return (
    <div className={styles.root}>
      <div className={`${styles.row} ${styles.headers}`}>
        {table.getFlatHeaders().map((header) => (
          <div 
            key={header.id}
            className={`${styles.cell} ${styles.header}`}
            style={createCellWidthStyle(header.column.columnDef.meta?.width)}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
          </div>
        ))}
        <div className={`${styles.cell} ${styles.header} ${styles.scrollbarOffset}`} />
      </div>
      <div className={styles.contentViewport} ref={tableContentRef}>
        <div
          className={styles.contentContainer}
          style={{ 
            height: `${contentScrollSize}px`,
            "--row-height": `${ROW_HEIGHT}px`,
          } as CSSProperties}
        >
          {virtualItems.map((virtualItem) => {
            const row = rows[virtualItem.index];

            return (
              <div 
                className={styles.row}
                key={row.id}
                style={{ transform: `translateY(${virtualItem.start}px)`}}
              >
                {row.getVisibleCells().map((cell) => (
                  <div className={styles.cell} key={cell.id} style={createCellWidthStyle(cell.column.columnDef.meta?.width)}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default memo(VirtualTableFlex) as <TData extends HasId>(props: VirtualTableFlexProps<TData>) => ReactElement;