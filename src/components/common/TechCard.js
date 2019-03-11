import React from 'react'
import styled from 'styled-components'

const TechCardWrapper = styled.div`
	position: relative;
	width: 160px;
	height: 100px;
	background: #0D0D0D;
	margin: 4px;
`

const Logo = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: black;
`
const TechCard = ({ className }) => {
	return(
		<TechCardWrapper>
			<Logo>
			</Logo>
		</TechCardWrapper>
	)
}

export default TechCard