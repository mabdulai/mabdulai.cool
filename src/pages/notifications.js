import React, { Component } from 'react';
import styled from 'styled-components';

import BlockContainer from '../components/Utility/BlockContainer';

const StudyContainer = styled.main`
  padding: 15rem 0 0rem;
  min-width: 120rem;
  margin: 0 auto;
`;

class NotificationsStudy extends Component {
  render() {
    return (
      <StudyContainer>
        ABOSS Notifications
        <BlockContainer>Another block</BlockContainer>
      </StudyContainer>
    );
  }
}

export default NotificationsStudy;
