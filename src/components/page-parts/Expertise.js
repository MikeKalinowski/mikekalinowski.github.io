import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/Button'
import TechCard from '../common/TechCard'

const ExpertiseWrapper = styled.div`
	padding: ${props => props.theme.layout.wrapperPaddingDesktop};
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`

const LeftWrapper = styled.div`
	width: 60%;
	padding-right: 40px;
`

const RightWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
`

const Title = styled.div`
	color: ${props => props.theme.color.title};
`

const Text = styled.div`
	padding-top: 20px;
	font-size: 13px;
`

const Resume = styled(Button)`
	margin-top: 80px;
`



class Expertise extends Component {
	constructor(props) {
		super(props)

		this.logos = ["js", "react", "gatsby", "git", "webpack", "graphql"]
	}

  	render() {
	    return (
	      	<ExpertiseWrapper>
	      		<LeftWrapper>
	      			<Title>Expertise</Title>
	      			<Text>Short intro about your experience, more info about your experience, more info about your experience, more info about your experience, </Text>
	      			<Resume text="download resume" url="#">download resume</Resume>
	      		</LeftWrapper>
	      		<RightWrapper>
	      			{this.logos.map(logo => <TechCard logo={logo} key={logo}/>)}	      			
	      		</RightWrapper>
	      	</ExpertiseWrapper>
	    );
  	}
}

export default Expertise;