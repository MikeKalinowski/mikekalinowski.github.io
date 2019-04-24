import React from 'react';
import styled from 'styled-components';

// Important: Remember to add className="animated" to parent or wow.js may bug the animation. E.g. Navigation.js

const StyledButton = styled.a`
  position: relative;

  display: inline-block;
  padding: 3px 2px 5px;
  border: none;
  background: none;
  color: ${props => props.theme.color.accent};  
  font: inherit;
  outline: inherit;
  text-decoration: none;
  letter-spacing: -0.04em;
  font-size: 13px;  
  cursor: pointer;
  transition: all 200ms ease;

  :after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;    
    content: '';
    z-index: -1;
    background: ${props => props.theme.color.accent};
    transition: all 300ms ease, background 3s;
  }

  :hover:after {
    height: 100%;
    background: linear-gradient(180deg, #8BFF6E 0%, #D9FF6E 100%);
  }

  :hover {
    color: black;
    font-weight: 500;
  }

`

const Button = ({ text, url, className, leadsOutside }) => {
  return(
    <StyledButton 
      className={className} 
      href={url} 
      target={leadsOutside ? "_blank" : ""} 
      rel={leadsOutside ? "noopener noreferrer" : ""}
    >
      {text}
    </StyledButton>
  )
}

export default Button