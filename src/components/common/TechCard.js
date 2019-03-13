import React from 'react'
import styled from 'styled-components'

import RenderLogo from './RenderLogo'

const TechCardWrapper = styled.div`
	position: relative;
	width: 160px;
	height: 100px;
	background: #0D0D0D;
	margin: 4px;
`

const Logo = styled.svg`
	position: relative;
	width: 50px;
	height: 50px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`



const TechCard = ({ logo }) => {
	return(
		<TechCardWrapper>
			<Logo viewBox="0 0 46 46">
				<RenderLogo logo={logo}/>
			</Logo>
		</TechCardWrapper>
	)
}

export default TechCard
