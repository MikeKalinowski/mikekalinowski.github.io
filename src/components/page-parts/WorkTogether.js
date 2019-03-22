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

	// This was added so that text would properly delay on page load when screen is > 27inch
	runDelayedAnimation = () => {
		let additionalHeightDelay = 0;
		(this.props.dimensions.innerHeight > 1100) && (additionalHeightDelay = 2.3) 
		return `${additionalHeightDelay}s`		
	}

  	render() {
	    return (
	      	<WorkTogetherWrapper
	      		className="wow fadeInUpSmall" 
	      		data-wow-delay={this.runDelayedAnimation()}
	      	>
	      		<Title >Why should we work together?</Title>
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