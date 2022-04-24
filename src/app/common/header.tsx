import React, { FC } from 'react';

import { styled } from '@mui/material';

const Outer = styled('div')(() => ({}));

const Title = styled('p')(() => ({
  fontWeight: 'bold',
  fontSize: 32,
}));

const Status = styled('p')(() => ({
  fontSize: 20,
  fontWeight: 'bold',
  color: 'red',
}));

const Header: FC<{ title: string; status?: string }> = ({ title, status }) => {
  return (
    <Outer>
      <Title>{title}</Title>
      <Status>{status}</Status>
    </Outer>
  );
};

export default Header;
