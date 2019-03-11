import React, { Component } from 'react';
import styled from 'styled-components';

const WorkTogetherWrapper = styled.div`
	padding: ${props => props.theme.layout.wrapperPaddingDesktop};
`

const Title = styled.div`
	color: ${props => props.theme.color.title};
`

const FeaturesWrapper = styled.div`
	padding-top: 60px;
	display: flex;
	flex-wrap: wrap;
`

class WorkTogether extends Component {
  	render() {
	    return (
	      	<WorkTogetherWrapper>
	      		<Title>Why should we work together?</Title>
	      		<FeaturesWrapper>
	      			Features go Here
	      		</FeaturesWrapper>
	      	</WorkTogetherWrapper>
	    );
  	}
}

export default WorkTogether;