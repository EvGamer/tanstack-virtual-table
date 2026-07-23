import { CSSProperties } from "react";

export function createCellWidthStyle(width: number | undefined): CSSProperties | undefined {
  if (!width) return undefined;

  return { width: `${width}px` };
}