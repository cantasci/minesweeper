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
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '80%',
  height: '90%',
  borderStyle: 'solid',
  borderWidth: 1,
  borderRadius: 10,
  borderColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
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
