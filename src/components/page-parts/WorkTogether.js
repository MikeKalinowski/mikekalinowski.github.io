import React, { Component } from 'react';
import styled from 'styled-components';

import features from '../../assets/features.json'
import FeatureCard from '../common/FeatureCard'

const WorkTogetherWrapper = styled.div`
	padding-top: 80px;

	@media ${props => props.theme.layout.tablet} {
		padding: ${props => props.theme.layout.wrapperPaddingDesktop};
  	}
`

const Title = styled.div`
	color: ${props => props.theme.color.title};
`

const FeaturesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media ${props => props.theme.layout.laptop} {
		justify-content: space-between;
  	}
`

class WorkTogether extends Component {
  	render() {
	    return (
	      	<WorkTogetherWrapper>
	      		<Title>Why should we work together?</Title>
	      		<FeaturesWrapper>
	      			{features.map(feature => {
	      				return(
	      					<FeatureCard title={feature.title} text={feature.text} key={feature.title}/>
	      				)
	      			})}
	      			
	      		</FeaturesWrapper>
	      	</WorkTogetherWrapper>
	    );
  	}
}

export default WorkTogether;