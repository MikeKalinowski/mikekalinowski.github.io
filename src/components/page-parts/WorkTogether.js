import React, { Component } from 'react';
import styled from 'styled-components';

import features from '../../assets/features.json'
import FeatureCard from '../common/FeatureCard'

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