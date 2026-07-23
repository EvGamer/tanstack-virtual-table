import '@tanstack/react-table';
import '@tanstack/react-router';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    width: number;
  } 
}

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}