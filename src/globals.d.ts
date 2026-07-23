import '@tanstack/react-table';
import type { AppRouter } from './router';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    width: number;
  } 
}

declare module '@tanstack/react-router' {
  interface Register {
    router: AppRouter;
  }
}
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css";
