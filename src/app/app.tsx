import React, { useEffect } from 'react';

import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import { useAppDispatch, useAppSelector } from '../store/hooks';

import Header from './common/header';
import Layout from './common/layout';
import GameControl from './game/gameControl';
import GameOnboarding from './game/gameOnboarding';
import { initializeGame } from './game/gameReducers';
import { GameTable } from './game/gameTable';

export const useAppStyles = makeStyles({
  content: {
    display: 'flex',
    overflow: 'scroll',
    flexDirection: 'column',
    margin: 30,
  },
  smallContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const dispatch = useAppDispatch();
  const classes = useAppStyles();
  const gameState = useAppSelector((state) => state.game);

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  const renderMessage = (message: string) => {
    return message !== 'OK' ? message : '';
  };

  const isRunning = gameState.message === 'OK' || !gameState.message;
  const hasData = gameState.map.length > 0;

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Header title="Minesweeper" status={renderMessage(gameState.message)} />
          {!hasData ? <GameOnboarding /> : null}
          <GameControl />

          <div
            className={
              gameState.map.length <= 10
                ? `${classes.content} ${classes.smallContent}`
                : classes.content
            }
          >
            {hasData ? <GameTable gameMap={gameState.map} isRunning={isRunning} /> : null}
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
