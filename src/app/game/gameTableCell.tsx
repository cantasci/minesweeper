import React, { FC, memo } from 'react';

import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useCellStyles = makeStyles({
  cell: {
    width: 30,
    height: 30,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '0px !important',
    '&:hover': {
      borderWidth: '2px !important',
      borderColor: 'revert',
    },
  },
  text: {
    fontWeight: 'bold',
    margin: 0,
  },
});

type CellColorType = 'primary' | 'success' | 'error';
type CellType = 'success' | 'error' | 'empty';

const CellStates = {
  Empty: '□',
  Error: '*',
};

const getType = (content: string): CellType => {
  if (content === CellStates.Empty) return 'empty';
  if (content === CellStates.Error) return 'error';

  return 'success';
};

const getColor = (type: CellType): CellColorType => {
  const colors: Record<CellType, CellColorType> = {
    error: 'error',
    empty: 'primary',
    success: 'success',
  };

  return colors[type];
};

const getFormattedContent = (content: string): string => {
  if (content === CellStates.Empty) return '';
  if (content === CellStates.Error) return '!';
  return content;
};

interface Props {
  content: string;
  onCellClick: (x: number, y: number) => void;
  positions: { x: number; y: number; maxColumns: number; maxRows: number };
  disabled?: boolean;
  testId?: string;
}

const GameTableCell: FC<Props> = ({
  content,
  onCellClick,
  positions,
  testId,
  disabled,
  ...rest
}: Props) => {
  const classes = useCellStyles();

  const { x, y, maxColumns, maxRows } = positions;

  const type = getType(content);
  return (
    <Button
      variant="outlined"
      color={getColor(type)}
      onClick={() => onCellClick(x, y)}
      className={classes.cell}
      data-testid={testId}
      style={{
        ...(x === maxRows - 1
          ? {}
          : {
              borderBottomWidth: 0,
            }),
        ...(y === maxColumns - 1
          ? {}
          : {
              borderRightWidth: 0,
            }),
        ...(type === 'error' ? { background: 'red', color: 'white' } : {}),
      }}
      {...rest}
    >
      <p className={classes.text}>{getFormattedContent(content)}</p>
    </Button>
  );
};

export type { CellType };

const MemoizedLGameTableCell = memo(GameTableCell);
export default MemoizedLGameTableCell;
