import React, { FC } from 'react';

import { makeStyles } from '@mui/styles';

import { GameClient } from './gameClient';
import GameTableCell from './gameTableCell';

export const useGameTableStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  outer: {
    maxWidth: '100%',
    overflow: 'scroll',
  },
});

interface Props {
  isRunning: boolean;
  gameMap: string[];
}

export const GameTable: FC<Props> = ({ gameMap, isRunning }) => {
  const classes = useGameTableStyles();

  const onCellClick = (y: number, x: number) => {
    GameClient.socket.send(`open ${x} ${y}`);
  };

  const renderMap = () => {
    return gameMap.map((item: string, rowIndex: number) => {
      const squares = item.split('');
      const rowKey = `square-${rowIndex}`;

      const maxRows = gameMap.length;
      const maxColumns = squares.length;
      const row = squares.map((square: string, columnIndex: number) => {
        const cellKey = `square-${rowIndex}-${columnIndex}`;
        const testId = `square-${rowIndex}-${columnIndex}`;

        return (
          <GameTableCell
            key={cellKey}
            testId={testId}
            positions={{
              x: rowIndex,
              y: columnIndex,
              maxColumns,
              maxRows,
            }}
            disabled={!isRunning}
            content={square}
            onCellClick={onCellClick}
          />
        );
      });
      return (
        <div key={rowKey} className={classes.row}>
          {row}
        </div>
      );
    });
  };

  return <div className={classes.outer}>{renderMap()}</div>;
};
