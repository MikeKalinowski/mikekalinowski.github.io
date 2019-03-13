import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	position: relative;
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	letter-spacing: -0.04em;
	font-size: 13px;
	color: ${props => props.theme.color.accent};
	padding-bottom: 5px;
	transition: all 200ms ease;

	// Effect by Emil Kowalski - https://emilkowalski.github.io/css-effects-snippets/
	:after {
	    content: '';
	    position: absolute;
	    height: 1px;
	    width: 100%;
	    left: 0;
	    bottom: 0;
	    background: ${props => props.theme.color.accent};
	    transition: all 200ms ease;
	}

	:hover:after {
	    opacity: 0;
	    transform: translateY(3px);
	}

	:hover {
		color: white;
	}

`

const Button = ({ text, url, className, leadsOutside }) => {
	return(
		<a href={url} target={leadsOutside ? "_blank" : ""} rel={leadsOutside ? "noopener noreferrer" : ""}>
			<StyledButton className={className}>
				{text}
			</StyledButton>
		</a>
	)
}

export default Button