import React, { FC } from 'react';

import { styled } from '@mui/material';

const Status = styled('p')(() => ({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'red',
}));

const GameStatus: FC<{ status?: string }> = ({ status }) => {
  return <Status>{status}</Status>;
};

export default GameStatus;
