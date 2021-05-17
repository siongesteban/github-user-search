import React from 'react';

import styles from './table.module.css';

export type TableField = {
  name?: string;
  text: string;
};

export type TableProps<TRow = Record<string, any>> = {
  fields: TableField[];
  rows: TRow[];
};

export const Table: React.FC<TableProps> = ({ fields, rows }) => {
  const renderHead = () => {
    const items = fields.map(({ name, text }, i) => (
      <th key={name || i}>{text}</th>
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
        {fields.map(({ name }, i) => (
          <td key={i}>{name ? row[name] : null}</td>
        ))}
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
