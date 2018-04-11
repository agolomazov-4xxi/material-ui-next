import React, {Fragment} from 'react';
import Header from '../../components/header';
import styled from 'styled-components';

const Content = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const DefaultLayout = props => (
  <Fragment>
    <Header/>
    <Content>
      {props.children}
    </Content>
  </Fragment>
);

export default DefaultLayout;
