import React, { Component } from 'react';
import styled from 'styled-components';

const IntroductionWrapper = styled.div`
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
	font-size: 26px;
	color: white;

	@media ${props => props.theme.layout.tablet} {
		font-size: 32px;
  	}
`

const Text = styled.div`
	padding-top: 40px;
	font-size: 26px;
	color: white;

	@media ${props => props.theme.layout.tablet} {
		font-size: 32px;
  	}
`


class Introduction extends Component {
  	render() {
	    return (
	      	<IntroductionWrapper>
      			<IntroGroup>
      				<Title>Hi there <span role="img" aria-label="wave">👋</span></Title>
      				<Text>I'm a frontend developer who worked for several years as Systems Analyst before deciding to pursue my passion for programming.</Text>
      			</IntroGroup>
	      	</IntroductionWrapper>
	    );
  	}
}

export default Introduction;