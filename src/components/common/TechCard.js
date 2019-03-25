import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'

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
		margin: 2px;
		transform: scale(0,8, 0,8);
  	}

	@media (min-width: 380px) {
		width: 156px;
		height: 100px;
		margin: 2px;
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
		<Tilt 
			className="Tilt" 
			options={{ 
				max: 50,
				perspective: 300,
				reverse: true,
				scale: 1
			}}
		>
		<TechCardWrapper className="Tilt-inner">
			<Logo viewBox="0 0 46 46">
				<RenderLogo logo={logo}/>
			</Logo>
		</TechCardWrapper>
		</Tilt>
	)
}

export default TechCard
