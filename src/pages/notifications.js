import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { colors } from '../styles/';
import BlockContainer from '../components/Utility/BlockContainer';
import checkmark from '../icons/check-mark.svg';
import notif from '../projects/notif.gif';
import steps from '../projects/steps.jpg';
import blueBegin from '../projects/blue-begin.jpg';
import redBegin from '../projects/red-begin.jpg';
import greenBegin from '../projects/green-begin.jpg';
import blueEnd from '../projects/blue-end.jpg';
import redEnd from '../projects/red-end.jpg';
import greenEnd from '../projects/green-end.jpg';

const StudyContainer = styled.main`
  padding: 5rem 5rem 0rem;
  margin: 0 auto;
  max-width: 120rem;
  width: 100%;
  overflow: hidden;
`;

const PostBlock = styled(BlockContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${colors.background};
  img {
    max-width: 100rem;
  }
`;

const PostTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;

const PostParagraph = styled.p`
  max-width: 40rem;
  font-size: 1.6rem;
  line-height: 3rem;
  padding: 1rem 0;
`;
const PostSubHeader = styled.h2`
  width: 60%;
  margin: 4rem 0 0;
  font-size: 4rem;
  font-weight: 700;
  border-bottom: 1rem solid ${colors.primary};
  padding-bottom: 1rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

const PostSubHeaderSmall = styled.h3`
  margin: 4rem 0 0;
  font-size: 2rem;
  font-weight: 700;
`;

const PostBullets = styled.ul`
  margin: 0;
  padding: 5rem 0;
`;
const PostItem = styled.li`
  list-style: none;
  font-size: 1.6rem;
  padding: 1rem 0 1rem 5rem;
  margin: 0 auto;

  @media (max-width: 700px) {
    line-height: 3rem;
  }

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
  margin-bottom: 4rem;

  @media (max-width: 700px) {
    width: 100%;
    transform: translateX(0rem);
  }
`;

const ScreenshotContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;

  @media (max-width: 950px) {
    flex-direction: column;

    img {
      padding: 1rem 0;
    }
  }
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
  max-height: 0rem;
  max-width: 7rem;
  flex: 0;
  flex-wrap: nowrap;
  align-items: flex-end;
  color: #222;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding-right: 2rem;
  font-size: 2rem;

  div {
    font-weight: 600;
  }

  &:hover {
    max-height: 1rem;
    background: ${colors.succes};
  }
`;

const Img = styled.img`
  display: block;
  max-width: ${props => (props.width ? props.width : '100%')};
  height: auto;
  margin-left: 300px;
`;
class NotificationsStudy extends Component {
  render() {
    return (
      <StudyContainer>
        <HomeLink to="/">
          <div>Home</div>
        </HomeLink>{' '}
        <PostTitle>ABOSS Notifications</PostTitle>
        <Cutebar />
        <PostBlock>
          <Img width="667px" src={notif} alt="ABOSS Notification" />
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
          <img src={steps} alt="Notification animation steps" /> <br />
          <PostSubHeaderSmall>Green - Succes / Confirmation</PostSubHeaderSmall>
          <ScreenshotContainer>
            <img src={greenBegin} alt="Green notification begin" />
            <img src={greenEnd} alt="Green notification end" />
          </ScreenshotContainer>
          <PostSubHeaderSmall>Red - Error / Delete</PostSubHeaderSmall>
          <ScreenshotContainer>
            <img src={redBegin} alt="Red notification begin" />
            <img src={redEnd} alt="Red notification end" />
          </ScreenshotContainer>
          <PostSubHeaderSmall>Blue - System notification</PostSubHeaderSmall>
          <ScreenshotContainer>
            <img src={blueBegin} alt="Blue notification begin" />
            <img src={blueEnd} alt="Blue notification end" />
          </ScreenshotContainer>
        </PostBlock>
      </StudyContainer>
    );
  }
}

export default NotificationsStudy;
