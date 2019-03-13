import React from 'react'
import styled from 'styled-components'

import RenderImage from '../common/RenderImage'

const FeatureCardWrapper = styled.div`
	width: 160px; 
	margin-right: 65px;

`

const Image = styled.svg`
	width: 80px;
	height: 80px;
`

const Title = styled.div`
	color: ${props => props.theme.color.title}
	padding-top: 20px;
`

const Text = styled.div`
	padding-top: 20px;
	font-size: 13px;
`


const FeatureCard = ({ title, text }) => {
	return(
		<FeatureCardWrapper>
			<Image viewBox="0 0 80 80"><RenderImage image={title} /></Image>
			<Title>{title}</Title>
			<Text>{text}</Text>
		</FeatureCardWrapper>
	)
}

export default FeatureCard
