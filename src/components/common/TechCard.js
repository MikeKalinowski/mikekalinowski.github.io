import React from 'react'
import styled from 'styled-components'

import RenderLogo from './RenderLogo'

const TechCardWrapper = styled.div`
	position: relative;
	width: 112px;
	height: 70px;
	margin: 2px;
	background: #0D0D0D;
	transform: scale(0,7, 0,7);

	// Width and height is needed every time because of flexbox's strange behaviour when scaling. 
	// Scaling is needed because of svg.
	@media (min-width: 320px) {
		width: 128px;
		height: 80px;
		margin: 4px;
		transform: scale(0,8, 0,8);
  	}

	@media (min-width: 380px) {
		width: 160px;
		height: 100px;
		margin: 4px;
		transform: scale(1, 1);
  	}
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
