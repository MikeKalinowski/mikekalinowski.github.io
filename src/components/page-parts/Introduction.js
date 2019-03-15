import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const IntroductionWrapper = styled.header`
	position: relative;
	padding-top: 60px;

	@media ${props => props.theme.layout.tablet} {
		padding: 60px 0px 120px 0px;
  	}
`

const IntroGroup = styled.div`
	margin: 0 auto;
`

const Title = styled.div`
	font-size: 20px;
	color: white;

	@media ${props => props.theme.layout.tablet} {
		font-size: 32px;
  	}
`

const waveAnimation = keyframes`
	50% {
	  transform: rotate(90deg);
	}
	100% {
	  transform: rotate(0deg);
	}
`

const Wave = styled.span`
	display: inline-block;
	animation: ${waveAnimation};
	animation-delay: 0.5s;
	animation-duration: 1.5s;
	animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
	transform-origin: 100% 100%;
`

const Text = styled.div`
	padding-top: 20px;
	font-size: 20px;
	color: white;

	@media ${props => props.theme.layout.tablet} {
		padding-top: 32px;
		font-size: 32px;
  	}
`


class Introduction extends Component {
  	render() {
	    return (
	      	<IntroductionWrapper>
      			<IntroGroup>
      				<Title className="wow fadeIn">Hi there <Wave><span role="img" aria-label="wave">👋</span></Wave></Title>
      				<Text className="wow fadeIn delay-1s">
      					I'm a frontend developer who had worked for several years as Systems Analyst before deciding to pursue my passion for programming.
      				</Text>
      			</IntroGroup>
	      	</IntroductionWrapper>
	    );
  	}
}

export default Introduction;