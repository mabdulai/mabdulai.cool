import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { colors } from '../../styles/';

const Button = styled(Link)`
  text-decoration: none;
  background: #fff;
  color: ${colors.fontMain};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 700;
  transition: all 150ms ease-in-out;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};

  &:hover {
    background-color: ${colors.succes};
    color: ${colors.fontMain};
  }
`;

const A = styled.a`
  text-decoration: none;
  background: #fff;
  color: ${colors.fontMain};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 700;
  transition: all 150ms ease-in-out;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};

  &:hover {
    background-color: ${colors.succes};
    color: ${colors.fontMain};
  }
`;

const FinalLink = props => {
  if (props.to.startsWith('/')) {
    return <Button {...props}>{props.children}</Button>;
  }

  return (
    <A {...props} href={props.to} target="_blank">
      {props.children}
    </A>
  );
};

class MainButton extends Component {
  render() {
    const { children, ...rest } = this.props;
    return <FinalLink {...rest}>{this.props.children}</FinalLink>;
  }
}

export default MainButton;
