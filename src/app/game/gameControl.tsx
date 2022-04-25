import React from 'react';

import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { createGame } from './gameActions';
import GameLevelSelection from './gameLevelSelection';

import { useAppSelector } from '../../store/hooks';

export const useGameControlStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
  },
  startButton: {
    minWidth: '100px !important',
    height: 55,
    marginLeft: 10,
  },
});

function GameControl() {
  const classes = useGameControlStyles();
  const gameState = useAppSelector((state) => state.game);

  const onPlayGame = () => {
    createGame(`new ${gameState.level}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <GameLevelSelection />
        <Button
          onClick={onPlayGame}
          variant="contained"
          color="success"
          className={classes.startButton}
          data-testid="start-game-btn"
        >
          {gameState.map.length ? 'Restart' : 'Start'}
        </Button>
      </div>
    </div>
  );
}

export default GameControl;
