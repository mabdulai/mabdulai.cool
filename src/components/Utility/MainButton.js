import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import colors from '../../styles/colors';

const Button = styled(Link)`
  text-decoration: none;
  background: #fff;
  padding: 2rem 6rem;
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
class MainButton extends Component {
  render() {
    const { children, ...rest } = this.props;
    return <Button {...rest}>{this.props.children}</Button>;
  }
}

export default MainButton;