import React, { Component } from 'react';
import styled from 'styled-components';
import faceImg from '../../assets/face.png'

const NavigationWrapper = styled.nav`
	width: 900px;
	margin: 0 auto;
	position: relative;
	height: ${props => props.theme.layout.navHeightDesktop};
	display: flex;
	align-items: center;
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

const Link = styled.a`
	display: block;
	width: 110px;
	height: 100%;
	line-height: 110px;
	text-decoration: none;
	:hover {
	  background-color: #4e5d6c;
	}
`

const UnderlinedText = styled.div`
	position: absolute;
  	top: 50%;
  	left: 50%;
  	transform: translate(-50%, -50%);
	color: ${props => props.theme.color.accent}
	text-align: center;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	padding-bottom: 5px;
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
      					<ListElement><Link href="#contact"><UnderlinedText>contact</UnderlinedText></Link></ListElement>
      				</List>
      			</Links>
      		</NavigationWrapper>
    	);
  	}
}

export default Navigation;