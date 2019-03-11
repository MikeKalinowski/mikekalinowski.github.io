import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/Button'

const NavigationWrapper = styled.nav`
	width: 900px;
	margin: 0 auto;
	position: fixed;
	height: ${props => props.theme.layout.navHeightDesktop};
	display: flex;
	align-items: center;
	background: black;
	z-index: 10;
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
	padding-left: 40px;
`

const Links = styled.div`
	position: absolute;
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
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
`

class Navigation extends Component {
  	render() {
    	return (
      		<NavigationWrapper>
      			<LogoWrapper>
      				<Logo>devMike</Logo>
      				<Text>[frontend]</Text>
      			</LogoWrapper>
      			<Links>
      				<List>
      					<ListElement><StyledButton text="contact" url="#contact" /></ListElement>
      				</List>
      			</Links>
      		</NavigationWrapper>
    	);
  	}
}

export default Navigation;