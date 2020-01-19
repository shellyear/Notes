import React from 'react';
import styled from 'styled-components';
import { HeaderUI } from '../ui/molecules/Header';
import { Icon } from '../ui/atoms/Icon';
import { Edit } from '../ui/atoms/Edit';
import { withRouter } from 'react-router-dom';


const Title = styled.h3`
    
`;

const Header = ({ history }) => {
    return (
        <HeaderUI>
            <Icon src='/back.svg' onClick={() => history.goBack()}/>
            <Title>Notes</Title>
            <Edit>Edit</Edit>
        </HeaderUI>
    );
};

export default withRouter(Header);