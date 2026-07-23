import '@tanstack/react-table';
import type { AppRouter } from './router';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    width: number;
  } 
}

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter;
  }
}

declare module "*.css";
