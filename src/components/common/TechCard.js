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

	// Changes color of svg logo in RenderLogo component
	:hover .changeColor {
		fill: url(#paint0_linear);
	};

	:hover .gradientBorder {
		background: linear-gradient(136.4deg, #B7FBFF -0.43%, #112748 100.26%);
	};

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

// Divs GradientWrapper and GradientInnerWrapper are needed to add a gradient border. It's width is decided by padding on GradientWrapper
const GradientWrapper = styled.div`
	position: relative;
	width: 90%;
	height: 90%;
	top: 50%;
	left: 50%;
	padding: 1.5px;
	border-radius: 3px;
	transform: translate(-50%, -50%);
`

const GradientInnerWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 2px;
	background: #0D0D0D;
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
				max: 30,
				perspective: 300,
				reverse: true,
				scale: 1
			}}
		>
			<TechCardWrapper className="Tilt-inner">
				<GradientWrapper className="gradientBorder">
					<GradientInnerWrapper>
						<Logo viewBox="0 0 46 46">
							<RenderLogo logo={logo}/>
						</Logo>
					</GradientInnerWrapper>
				</GradientWrapper>
			</TechCardWrapper>
		</Tilt>
	)
}

export default TechCard