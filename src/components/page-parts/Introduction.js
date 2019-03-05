import React, { Component } from 'react';
import styled from 'styled-components';
import ImgBackground from '../../assets/background.jpg'

const IntroductionWrapper = styled.div`
	background-color: #4e5d6c;
	background-image: url(${ImgBackground});
	background-attachment: fixed;
/*	background-size: cover;*/
`

const InsideWrapper = styled.div`
	position: relative;
	width: 900px;
	height: calc(100vh - 90px);
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
	position: absolute;
	bottom: 40px;
/*	padding-top: 140px;*/
	display: inline-block;
`

const Arrow = styled.img`
	padding-top: 4px;
	display: block;
	margin: 0 auto;
`

const PortfolioText = styled.div`
	font-size: 14px;
	font-family: Open Sans;
	color: white;
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
	      			<a href="#projects">
		      			<LinkToPortfolio>
		      				<PortfolioText>
		      					View Projects
		      				</PortfolioText>
		      				<Arrow src={require('../../assets/arrow2.png')}></Arrow>
		      			</LinkToPortfolio>
	      			</a>
	      		</InsideWrapper>
	      	</IntroductionWrapper>
	    );
  	}
}

export default Introduction;