import React, { PropsWithChildren } from 'react';
import AppBar from './appBar';
import { Content, Wrapper } from './style';

interface Props {}

const Layout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Wrapper>
      <AppBar />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout;
