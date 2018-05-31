import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

import BlockContainer from '../components/Utility/BlockContainer';
import checkmark from '../icons/check-mark.svg';
import notif from '../projects/notif.gif';

const StudyContainer = styled.main`
  padding: 5rem 0 0rem;
  margin: 0 auto;
`;

const PostBlock = styled(BlockContainer)`
  background: ${colors.background};

`;

const PostTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;

const PostParagraph = styled.p`
  max-width: 80rem;
  font-size: 1.6rem;
  line-height: 3rem;
  padding: 1rem 0;
`;
const PostSubHeader = styled.h2`
  display: inline-block;
  padding-right: 20rem;
  margin: 4rem 0 0;
  font-size: 4rem;
  font-weight: 700;
  border-bottom: 1rem solid ${colors.primary};
`;
const PostBullets = styled.ul`
  margin: 0;
`;
const PostItem = styled.li`
  list-style: none;
  font-size: 1.6rem;
  padding: 1rem 0;

  &:before {
    background-image: url(${checkmark});
    display: inline-block;
    background-size: cover;
    min-height: 2rem;
    min-width: 2rem;
    margin-right: 1rem;
    content: '';
  }

  span {
    padding: 0.5rem;
    transition: 100ms all linear;
  }

  &:hover {
    span {
      background: ${colors.succes};
      cursor: default;
    }
  }
`;
const Cutebar = styled.div`
  display: flex;
  width: 60rem;
  height: 1rem;
  background: ${colors.primary};
  transform: translateX(10rem);
  box-shadow: 5px 5px ${colors.succes};
`;
class NotificationsStudy extends Component {
  render() {
    return (
      <StudyContainer>
        <PostTitle>ABOSS Notifications</PostTitle>
        <Cutebar></Cutebar>
        <PostBlock>
          <img src={notif} alt="ABOSS Notification"/>
          <PostParagraph>
            Working at ABOSS for the last 2 years, I have been able to work on some amazing new functionalities and
            working with some of the cutting edge technologies in the field of Frontend development. But as time goes on
            off adding new features to an already feature rich system you start to notice that some older features are
            starting to have a dated look.
          </PostParagraph>
          <PostParagraph>
            Only adding new features to your system (also known as feature creep) has many potential dangers.
          </PostParagraph>
          <PostBullets>
            <PostItem>
              <span>Making your system more and more complicated to use for new users</span>
            </PostItem>
            <PostItem>
              <span>Adding more and more technical debt to your codebase</span>
            </PostItem>
            <PostItem>
              <span>Neglecting already built features and not updating them style wise</span>
            </PostItem>
            <PostItem>
              <span>And more</span>
            </PostItem>
          </PostBullets>
          <PostParagraph>
            In a effort of not neglecting our older features we like to plan in some time to update already built
            features to keep our style consistent. So it was time to revamp our notification system to bring it in to
            2018
          </PostParagraph>
          <PostSubHeader>Old Situation</PostSubHeader>
          <PostParagraph>
            The main focus of the revamp of the notification system was only a cosmetic one. It was already implemented
            deeply in our system and it was working correctly.
          </PostParagraph>
          <PostParagraph>
            We noticed that the way it was designed it would not stick out enough. This is off course one the last
            things that you would want from your notifications. Also the way the notifications were worded made it too
            long to read in certain scenario's.
          </PostParagraph>
          <PostParagraph>The notifications had the following characteristics.</PostParagraph>
          <PostBullets>
            <PostItem>
              <span>Different colors based on the action performed</span>
            </PostItem>
            <PostItem>
              <span>Variable timer for when the notification would disappear</span>
            </PostItem>
            <PostItem>
              <span>For some actions you could undo the performed action (e.g. delete an user)</span>
            </PostItem>
          </PostBullets>
          <PostSubHeader>Revamp</PostSubHeader>
          <PostParagraph>
            We wanted to keep the new notifications almost the same with some small added functionalities.
          </PostParagraph>
          <PostBullets>
            <PostItem>
              <span>Able to see time remaining on notifications that require action</span>
            </PostItem>
            <PostItem>
              <span>Make the API a bit more flexible for easier use</span>
            </PostItem>
          </PostBullets>
          <PostParagraph>
            But still the big part of the work lays in the design and animation of the notification.
          </PostParagraph>
          <PostParagraph>The main goals of the revamp in design were.</PostParagraph>
          <PostBullets>
            <PostItem>
              <span>Make it more noticeable</span>
            </PostItem>
            <PostItem>
              <span>Let it have multiple animations for more visibility</span>
            </PostItem>
            <PostItem>
              <span>Upgrade it to our new styling.</span>
            </PostItem>
          </PostBullets>
          <PostSubHeader>New Situation</PostSubHeader>
          <PostParagraph>
            After much tinkering with the animations and the timings this is what our new notifications look like.
          </PostParagraph>
          — IMAGE HERE — Notification with action — IMAGE HERE — Color Variations — IMAGE HERE —
        </PostBlock>
      </StudyContainer>
    );
  }
}

export default NotificationsStudy;
