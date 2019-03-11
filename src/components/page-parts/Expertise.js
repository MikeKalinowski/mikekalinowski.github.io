import React, { Component } from 'react';
import styled from 'styled-components';

const ExpertiseWrapper = styled.div`
	padding: ${props => props.theme.layout.wrapperPaddingDesktop};
	display: flex;
`

const LeftWrapper = styled.div`
	width: 380px;
	padding-right: 40px
`

const RightWrapper = styled.div`

`

const Title = styled.div`
	color: ${props => props.theme.color.title};
`

const Text = styled.div`
	padding-top: 20px;
	font-size: 13px;
`

const Resume = styled.div`
	display: inline-block;
	padding-top: 80px;
	font-size: 13px;
	color: ${props => props.theme.color.accent};
	border-bottom-width: 1px;
	border-bottom-style: solid;
	padding-bottom: 5px;
`

const A = styled.div`

`

class Expertise extends Component {
  	render() {
	    return (
	      	<ExpertiseWrapper>
	      		<LeftWrapper>
	      			<Title>Expertise</Title>
	      			<Text>Short intro about your experience, more info about your experience, more info about your experience, more info about your experience, </Text>
	      			<Resume>download resume</Resume>
	      		</LeftWrapper>
	      		<RightWrapper>
	      			TEST
	      		</RightWrapper>
	      	</ExpertiseWrapper>
	    );
  	}
}

export default Expertise;