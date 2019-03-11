import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
	letter-spacing: -0.04em;
	font-size: 13px;
	color: ${props => props.theme.color.accent};
	border-bottom-width: 1px;
	border-bottom-style: solid;
	padding-bottom: 5px;

	:hover {
		color: white;
		background-color: ${props => props.theme.color.text};
	}
`

const Button = ({ text, url, className }) => {
	return(
		<a href={url}>
			<StyledButton className={className}>
				{text}
			</StyledButton>
		</a>
	)
}

export default Button