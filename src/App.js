import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Contact from './components/page-parts/Contact'
import Projects from './components/page-parts/Projects'
import Introduction from './components/page-parts/Introduction'
import Navigation from './components/page-parts/Navigation'

const MainWrapper = styled.div`
  
`

class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Navigation />
        <Introduction />
        <Projects />
        <Contact />
      </MainWrapper>
    );
  }
}

export default App;
