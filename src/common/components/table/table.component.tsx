import React from 'react';

import { Button } from 'common/components/button';
import { TextStyle } from 'common/components/text-style';
import { SelectField } from 'common/components/select-field';

import styles from './table.module.css';

export type TableField<TRow> = {
  name?: keyof TRow;
  text?: string;
  alignment?: 'left' | 'center' | 'right';
  render?: (row: TRow) => React.ReactNode;
};

export type TablePagination = {
  loading?: boolean;
  currentPage: number;
  pageCount: number;
  onPrevious: (page: number) => void;
  onNext: (page: number) => void;
};

export type TablePageSize = {
  currentSize: number;
  sizes: number[];
  onChange: (pageSize: number) => void;
};

export type TableProps<TRow = Record<string, any>> = {
  fullWidth?: boolean;
  emptyMessage?: string;
  fields: TableField<TRow>[];
  rows: TRow[];
  pagination?: TablePagination;
  pageSize?: TablePageSize;
};

export const Table = <TRow extends Record<string, any>>({
  fullWidth,
  emptyMessage,
  fields,
  rows,
  pagination,
  pageSize,
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

  const renderPageSizes = () => {
    if (!pageSize || !pageSize.sizes.length) {
      return null;
    }

    const { currentSize, sizes, onChange } = pageSize;

    const handleChange = (_: string, value: string) => {
      onChange(Number(value));
    };

    return (
      <div>
        <SelectField
          name="table-page-size"
          size="sm"
          title="Page Size"
          value={currentSize}
          options={sizes.map((size) => {
            const value = size.toString();

            return {
              value,
              text: value,
            };
          })}
          onChange={handleChange}
        />
      </div>
    );
  };

  const renderPagination = () => {
    if (!pagination) {
      return null;
    }

    const { loading, currentPage, pageCount, onNext, onPrevious } = pagination;
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pageCount;

    const handlePrevious = () => {
      if (isFirstPage) {
        return null;
      }

      onPrevious(currentPage - 1);
    };

    const handleNext = () => {
      if (isLastPage) {
        return null;
      }

      onNext(currentPage + 1);
    };

    return (
      <div className={styles.pagination}>
        <Button
          disabled={loading || isFirstPage}
          size="sm"
          text="Prev"
          onClick={handlePrevious}
        />
        <span>{currentPage}</span>
        <Button
          disabled={loading || isLastPage}
          size="sm"
          text="Next"
          onClick={handleNext}
        />
      </div>
    );
  };

  const wrapperClassNames = [styles.wrapper];

  if (fullWidth) {
    wrapperClassNames.push(styles['full-width']);
  }

  const controls = (
    <div className={styles.controls}>
      {renderPageSizes()}
      {renderPagination()}
    </div>
  );

  return (
    <div className={wrapperClassNames.join(' ')}>
      {!rows.length ? (
        <TextStyle text={emptyMessage || 'The table is empty.'} />
      ) : (
        <>
          <table className={styles.table}>
            {renderHead()}
            {renderBody()}
          </table>
          {controls}
        </>
      )}
    </div>
  );
};
