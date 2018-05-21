import React, { Component } from 'react';
import styled from 'styled-components';
import Twitter from '../../icons/twitter.svg';
import Github from '../../icons/github.svg';
import Dribbble from '../../icons/dribbble.svg';
import Codepen from '../../icons/codepen.svg';
import colors from '../../styles/colors';

const icons = [
  { icon: Twitter, name: 'Twitter', link: 'http://www.twitter.com/mabdulai90' },
  { icon: Github, name: 'Github', link: 'http://www.github.com/mabdulai' },
  { icon: Dribbble, name: 'Dribbble', link: 'http://www.dribbble.com/mabdulai' },
  { icon: Codepen, name: 'Codepen', link: 'http://www.codepen.com/mabdulai' }
];

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  padding-right: 2rem;
  fill: ${colors.succes};
  opacity: 0.6;
  transition: 200ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

class Icons extends Component {
  render() {
    return (
      <IconContainer>
        {icons.map(({ icon, name, link }, index) => {
          return (
            <a key={index} href={link}>
              <Icon src={icon} alt={name} />
            </a>
          );
        })}
      </IconContainer>
    );
  }
}

export default Icons;
