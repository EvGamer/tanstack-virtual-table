import { ColumnDef, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { CSSProperties, memo, ReactElement, useRef } from "react";
import { ROW_HEIGHT } from "./constants";

import styles from "./virtual-table-grid.module.css";
import { HasId } from "../../shared/types";

export type VirtualTableGridProps<TData extends HasId> = {
  data: TData[];
  columns: ColumnDef<TData>[];
}

function VirtualTableGrid<TData extends HasId>(props: VirtualTableGridProps<TData>) {
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
  const visibleColumns = table.getVisibleFlatColumns();

  return (
    <div className={styles.root}>
      <div className={styles.contentViewport} ref={tableContentRef}>
        <div
          className={styles.contentContainer}
          style={{ 
            height: `${contentScrollSize}px`,
            "--row-height": `${ROW_HEIGHT}px`,
            "--column-count": visibleColumns.length,
          } as CSSProperties}
        >
          <div className={`${styles.row} ${styles.headers}`}>
            {table.getFlatHeaders().map((header) => (
              <div key={header.id} className={`${styles.cell} ${styles.header}`}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </div>
            ))}
          </div>
          <div className={styles.content} style={{ transform: `translateY(${virtualItems[0]?.start ?? 0}px)` }}>
            {virtualItems.map((virtualItem) => {
              const row = rows[virtualItem.index];

              return (
                <div 
                  className={styles.row}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <div className={styles.cell} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default memo(VirtualTableGrid) as <TData extends HasId>(props: VirtualTableGridProps<TData>) => ReactElement;