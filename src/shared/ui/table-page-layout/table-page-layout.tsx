import { memo, PropsWithChildren } from "react";
import styles from "./table-page-layout.module.css";
import { Link } from "@tanstack/react-router";

export type TablePageLayoutProps = PropsWithChildren<{
  title: string;
}>

function TablePageLayout({ children, title }: TablePageLayoutProps) {
  return (
    <div className={styles.root}>
      <div className={styles.contentContainer}>
        <aside>
          <Link to="/" className={styles.link}>Flex table</Link> 
          <Link to="/grid-table" className={styles.link}>Grid table</Link>
        </aside>
        <div className={styles.content}>
          <h1 className={styles.header}>{title}</h1>
          {children}
        </div>
        <aside />
      </div>
    </div>
  )
}

export default memo(TablePageLayout);