import React from 'react';

import styles from './table.module.css';

export type TableField<TRow> = {
  name?: keyof TRow;
  text?: string;
  alignment?: 'left' | 'center' | 'right';
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
    const items = fields.map(({ name, text, alignment = 'left' }, i) => {
      const className = styles[`align-${alignment}`];

      return (
        <th key={name?.toString() || i} className={className}>
          {text}
        </th>
      );
    });

    return (
      <thead>
        <tr>{items}</tr>
      </thead>
    );
  };

  const renderBody = () => {
    const items = rows.map((row, i) => (
      <tr key={i}>
        {fields.map(({ name, render, alignment = 'left' }, i) => {
          const className = styles[`align-${alignment}`];

          const customContent = render?.(row);
          const value = name ? row[name] : null;
          const content = customContent || value;

          return (
            <td key={i} className={className}>
              {content}
            </td>
          );
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
