import React, { Component } from 'react';
import styled from 'styled-components';

import features from '../../assets/features.json'
import FeatureCard from '../common/FeatureCard'

const WorkTogetherWrapper = styled.section`
	padding-top: 80px;

	@media ${props => props.theme.layout.tablet} {
		padding: ${props => props.theme.layout.wrapperPaddingDesktop};
  	}
`

const Title = styled.h1`
	font-size: 1em;
  	margin: 0;
 	font-weight: 500;
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
	      			{features.map((feature, index) => {
	      				return(
	      					<FeatureCard 
	      						title={feature.title} 
	      						text={feature.text} 
	      						key={feature.title}
	      						index={index}
	      						dimensions={this.props.dimensions}
	      					/>
	      				)
	      			})}
	      			
	      		</FeaturesWrapper>
	      	</WorkTogetherWrapper>
	    );
  	}
}

export default WorkTogether;