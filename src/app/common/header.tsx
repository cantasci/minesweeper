import React, { FC } from 'react';

import { styled } from '@mui/material';

const Outer = styled('div')(() => ({}));

const Title = styled('p')(() => ({
  fontWeight: 'bold',
  fontSize: 32,
}));

const Header: FC<{ title: string }> = ({ title }) => {
  return (
    <Outer>
      <Title>{title}</Title>
    </Outer>
  );
};

export default Header;
