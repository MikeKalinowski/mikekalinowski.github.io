import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/Button'

const NavigationWrapper = styled.header`
	height: ${props => props.theme.layout.navHeightMobile};
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: black;
	z-index: 10;

	@media ${props => props.theme.layout.tablet} {
		height: ${props => props.theme.layout.navHeightDesktop};
  	}
`

const LogoWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`

const Logo = styled.div`
	color: ${props => props.theme.color.title};
`

const Text = styled.div`
	padding-left: 20px;
	display: none;

	@media (min-width: 280px) { /*Need to display:none or the design won't be pretty :(*/
	  display: block;
	}

	@media (min-width: 350px) {
	  padding-left: 40px;
	}
`

const Links = styled.nav`
	position: relative;
`

class Navigation extends Component {
  	render() {
    	return (
      		<NavigationWrapper className="animated wow fadeIn" data-wow-delay="1.3s">
      			<LogoWrapper>
      				<Logo>devMike</Logo>
      				<Text>[frontend]</Text>
      			</LogoWrapper>
      			<Links>
      				<Button text="contact" url="mailto:hi@devmike.pro" />
      			</Links>
      		</NavigationWrapper>
    	);
  	}
}

export default Navigation;