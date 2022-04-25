import React from 'react';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { setLevel } from './gameReducers';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const useLevelSelectionStyle = makeStyles({
  levelSelector: {
    maxWidth: '180px !important',
    height: 55,
  },
});

function GameLevelSelection() {
  const dispatch = useAppDispatch();
  const classes = useLevelSelectionStyle();
  const gameState = useAppSelector((state) => state.game);

  const handleOnLevelChange = (event: SelectChangeEvent) => {
    const newLevel = Number(event?.target?.value);
    dispatch(setLevel(newLevel));
  };

  const levelItems = Array(4)
    .fill(null)
    .map((_item, index) => index + 1);

  return (
    <FormControl fullWidth className={classes.levelSelector}>
      <InputLabel id="level-select-label">Level</InputLabel>
      <Select
        labelId="level-select-label"
        id="level-select"
        value={`${gameState.level}`}
        label="Level"
        onChange={handleOnLevelChange}
      >
        {levelItems.map((item) => (
          <MenuItem key={`level-item-${item}`} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default GameLevelSelection;
