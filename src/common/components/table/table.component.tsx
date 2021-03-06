import React from 'react';

import { Button } from 'common/components/button';
import { TextStyle } from 'common/components/text-style';
import { SelectField } from 'common/components/select-field';
import { SortAscendingIcon, SortDescendingIcon } from 'common/icons';

import styles from './table.module.css';

export type TableField<TRow> = {
  name?: keyof TRow;
  text?: string;
  alignment?: 'left' | 'center' | 'right';
  sort?: boolean;
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
  sort?: [keyof TRow, 'asc' | 'desc'];
};

export const Table = <TRow extends Record<string, any>>({
  fullWidth,
  emptyMessage,
  fields,
  rows,
  pagination,
  pageSize,
  sort,
}: TableProps<TRow>) => {
  const [currentSort, setCurrentSort] = React.useState(sort);
  const [sortField, sortOrder] = currentSort || [];

  const sortedRows =
    !sortField || !sortOrder
      ? rows
      : rows.sort((rowA, rowB) => {
          if (rowA[sortField] < rowB[sortField]) {
            return sortOrder === 'asc' ? -1 : 1;
          }

          if (rowA[sortField] > rowB[sortField]) {
            return sortOrder === 'asc' ? 1 : -1;
          }

          return 0;
        });

  const renderHead = () => {
    const items = fields.map(
      ({ name, text, sort: sortColumn, alignment = 'left' }, i) => {
        const classNames = [styles[`align-${alignment}`]];

        if (sortColumn) {
          classNames.push(styles.sort);
        }

        const handleClick = () => {
          if (!sortColumn || !name) {
            return;
          }

          setCurrentSort([name, currentSort?.[1] === 'asc' ? 'desc' : 'asc']);
        };

        return (
          <th
            key={name?.toString() || i}
            className={classNames.join(' ')}
            onClick={handleClick}
          >
            {text}
            {currentSort?.[0] === name &&
              (currentSort?.[1] === 'asc' ? (
                <SortAscendingIcon className={styles['sort-icon']} />
              ) : (
                <SortDescendingIcon className={styles['sort-icon']} />
              ))}
          </th>
        );
      }
    );

    return (
      <thead>
        <tr>{items}</tr>
      </thead>
    );
  };

  const renderBody = () => {
    const items = sortedRows.map((row, i) => (
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
