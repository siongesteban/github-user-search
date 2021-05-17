import React from 'react';

import styles from './table.module.css';

export type TableField<TRow> = {
  name?: keyof TRow;
  text?: string;
  render?: (row: TRow) => React.ReactNode;
};

export type TableProps<TRow = Record<string, any>> = {
  fields: TableField<TRow>[];
  rows: TRow[];
};

export const Table = <TRow extends Record<string, any>>({
  fields,
  rows,
}: TableProps<TRow>) => {
  const renderHead = () => {
    const items = fields.map(({ name, text }, i) => (
      <th key={name?.toString() || i}>{text}</th>
    ));

    return (
      <thead>
        <tr>{items}</tr>
      </thead>
    );
  };

  const renderBody = () => {
    const items = rows.map((row, i) => (
      <tr key={i}>
        {fields.map(({ name, render }, i) => {
          const content = render?.(row) || (name ? row[name] : null);

          return <td key={i}>{content}</td>;
        })}
      </tr>
    ));

    return <tbody>{items}</tbody>;
  };

  return (
    <table className={styles.table}>
      {renderHead()}
      {renderBody()}
    </table>
  );
};
