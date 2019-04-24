import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WOW from 'wow.js';

import Contact from './components/page-parts/Contact';
import Expertise from './components/page-parts/Expertise';
import WorkTogether from './components/page-parts/WorkTogether';
import Projects from './components/page-parts/Projects';
import Introduction from './components/page-parts/Introduction';
import Navigation from './components/page-parts/Navigation';

import './components/constant/fonts.css';
import { Theme } from './components/constant/theme.js';
import './App.css';
import 'animate.css';

const MainWrapper = styled.div`
  position: relative;
  max-width: ${props => props.theme.layout.contentWidthDesktop};
  margin: 0 auto;
  padding: 0 20px 0 20px; 
  color: ${props => props.theme.color.text};
  font-family: Roboto Mono;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 16px;
  letter-spacing: -0.04em;

  @media ${props => props.theme.layout.tablet} {
    padding: 0 40px 0 40px;
  }

  @media ${props => props.theme.layout.laptop} {
    padding: 0;
  }
`

class App extends Component {
  state = {
    dimensions: {
      innerWidth: 0,
      innerHeight: 0
    }
  }

  componentDidMount() {
    const checkDimensions = () => {
      this.setState({dimensions: {
        innerWidth: window.innerWidth, 
        innerHeight: window.innerHeight
      }});
    }
    checkDimensions();
    window.addEventListener('resize', checkDimensions);

    // Needed for scroll-reveal animations with classname "wow"
    new WOW().init(); 
  }

  // This was added so that text would properly delay on page load when screen is > 27inch
  runDelayedAnimation = (height, delay) => {
    let additionalHeightDelay = 0;
    (this.state.dimensions.innerHeight > height) && (additionalHeightDelay = delay) 
    return `${additionalHeightDelay}s`    
  }

  render() {
    return (
      <ThemeProvider theme={Theme}>
        <MainWrapper>
          <Navigation />
          <Introduction />
          <Expertise runDelayedAnimation={this.runDelayedAnimation}/>
          <WorkTogether dimensions={this.state.dimensions} runDelayedAnimation={this.runDelayedAnimation}/>
          <Projects />
          <Contact />
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
