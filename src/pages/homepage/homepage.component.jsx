import React from 'react';
import Directory from '../../components/directory/directory.component';
import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;
//import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)
export default HomePage