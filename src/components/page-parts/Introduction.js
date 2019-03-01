import React, { Component } from 'react';
import styled from 'styled-components'

const IntroductionWrapper = styled.div`
	background-color: #4e5d6c;
`

const InsideWrapper = styled.div`
	width: 900px;
	margin: 0 auto;
	padding: 160px 0px;
	color: white;
`

const IntroGroup = styled.div`
	margin: 0 auto;
`

const Title = styled.div`
	font-style: "Open sans";
	font-size: 36px;
`

const Text = styled.div`
	padding-top: 40px;
	margin: 0 auto;
	font-size: 22px;
`

const LinkToPortfolio = styled.div`
	padding-top: 80px;
	font-size: 16px;
	font-family: Open Sans;
`

class Introduction extends Component {
  	render() {
	    return (
	      	<IntroductionWrapper id="about">
	      		<InsideWrapper>
	      			<IntroGroup>
	      				
	      				<Title>Web developer</Title>
	      				<Text>Hello there, I'm a web developer who worked for several years as Systems Analyst before deciding to pursue my passion in programming.</Text>
	      			</IntroGroup>
	      			<LinkToPortfolio>
	      				View Portfolio
	      			</LinkToPortfolio>
	      		</InsideWrapper>
	      	</IntroductionWrapper>
	    );
  	}
}

export default Introduction;