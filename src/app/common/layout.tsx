import React, { FC } from 'react';

import { Paper, styled } from '@mui/material';

const Container = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: 'hidden',
  background: 'white',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Content = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  display: 'flex',
  width: '100%',
  paddingInline: 16,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  maxWidth: '100%',
}));

const StyledLayout: FC = ({ children }) => {
  return (
    <>
      <Container>
        <Content elevation={0}>{children}</Content>
      </Container>
    </>
  );
};

export default StyledLayout;
