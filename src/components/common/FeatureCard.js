import React, { useEffect } from 'react';
import styled from 'styled-components';
import WOW from 'wow.js';

import RenderImage from '../common/RenderImage';

import './FeatureCard.css';

const FeatureCardWrapper = styled.div`
  width: 215px; 
  margin: 0 25px;
  padding-top: 40px;
  text-align: center;

  @media ${props => props.theme.layout.tablet} {
    margin: 0 15px;
    padding-top: 60px;
    text-align: initial;
    }

  @media ${props => props.theme.layout.laptop} {
    margin: 0;
    }
`

const Image = styled.svg`
  width: 80px;
  height: 80px;
`

const Title = styled.div`
  padding-top: 20px;
  color: ${props => props.theme.color.title}
`

const Text = styled.div`
  padding-top: 20px;
  font-size: 13px;
`


const FeatureCard = ({ title, text, index, dimensions }) => {
  useEffect(() => {
  // Needed for scroll-reveal animations of svg elements
    const wow2 = new WOW({
        boxClass: 'wow2',
        animateClass: 'animateSvg',
    });
    wow2.init();
  });

  // Runs animations based on screen width and order of items. Each item start 0.5s after the last
  const runDelayedAnimation = () => {
    let additionalHeightDelay = 0;
    (dimensions.innerHeight > 1100) && (additionalHeightDelay = 2) // This was added so that animation wouldn't run on page load when screen is > 27inch
    return (dimensions.innerWidth > 1024) ? `${0.5 * index + additionalHeightDelay}s` : "0s"    
  }

  return(
    <FeatureCardWrapper 
      className="wow2 animateSvg" 
      data-wow-delay={runDelayedAnimation()}
    >
      <Image viewBox="0 0 80 80"><RenderImage image={title} /></Image>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </FeatureCardWrapper>
  )
}

export default FeatureCard
