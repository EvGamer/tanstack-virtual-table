import { memo, PropsWithChildren } from "react";
import styles from "./table-page-layout.module.css";

export type TablePageLayoutProps = PropsWithChildren<{
  title: string;
}>

function TablePageLayout({ children, title }: TablePageLayoutProps) {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>{title}</h1>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default memo(TablePageLayout);