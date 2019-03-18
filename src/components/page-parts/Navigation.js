import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/Button'

const NavigationWrapper = styled.header`
	margin: 0 auto;
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
	right: 0px;
	height: 100%;
`

const List = styled.ul`
	height: 100%;
	list-style-type: none;
	margin: 0;
	padding: 0;
`

const ListElement = styled.li`	
	height: 100%;
	float: left;
`

const StyledButton = styled(Button)`
	position: relative;
  	top: calc(50% - 13px); // Needed to hardcode this or it would move when hovered
`

class Navigation extends Component {
  	render() {
    	return (
      		<NavigationWrapper className="wow fadeIn" data-wow-delay="1.3s">
      			<LogoWrapper>
      				<Logo>devMike</Logo>
      				<Text>[frontend]</Text>
      			</LogoWrapper>
      			<Links>
      				<List>
      					<ListElement>
      						<StyledButton text="contact" url="mailto:hi@devmike.pro" />
      					</ListElement>
      				</List>
      			</Links>
      		</NavigationWrapper>
    	);
  	}
}

export default Navigation;