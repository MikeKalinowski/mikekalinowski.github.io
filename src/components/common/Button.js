import React from 'react'
import styled from 'styled-components'

// Important: Remember to add className="animated" to parent or wow.js may bug the animation. E.g. Navigation.js

const StyledButton = styled.button`
	position: relative;
	background: none;
	border: none;
	padding: 3px 2px 5px;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	letter-spacing: -0.04em;
	font-size: 13px;
	color: ${props => props.theme.color.accent};
	transition: all 200ms ease;

	:after {
	    content: '';
	    position: absolute;
	    z-index: -1;
	    height: 1px;
	    width: 100%;
	    left: 0;
	    bottom: 0;
	    background: linear-gradient(180deg, #D9FF6E 0%, #8BFF6E 100%);
	    transition: all 300ms ease;
	}

	:hover:after {
	    height: 100%;
	}

	:hover {
		color: black;
		font-weight: bold;
	}

`

const Button = ({ text, url, className, leadsOutside }) => {
	return(
		<a 
			href={url} 
			target={leadsOutside ? "_blank" : ""} 
			rel={leadsOutside ? "noopener noreferrer" : ""}
		>
			<StyledButton className={className}>
				{text}
			</StyledButton>
		</a>
	)
}

export default Button