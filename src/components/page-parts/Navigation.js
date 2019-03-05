import React, { Component } from 'react';
import styled from 'styled-components'

const NavigationWrapper = styled.nav`
	width: 900px;
	margin: 0 auto;
	position: relative;
	height: 90px;
	display: flex;
	align-items: center;
`

const Logo = styled.div`
	position: relative;
	display: flex;
`

const Face = styled.div`
	height: 30px;
	width: 30px;
	background-color: #4e5d6c;
	border-radius: 15px;
`

const TextWrapper = styled.div`
	padding-left: 10px;
`

const Title = styled.div`
	font-size: 17px;
	
`

const Text = styled.div`
	font-size: 10px;
	letter-spacing: 1px;
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
	font-weight: 800;
	font-size: 13px;
`

const ListElement = styled.li`	
	height: 100%;
	float: left;
`

const Link = styled.a`
	display: block;
	width: 110px;
	height: 100%;
	text-decoration: none;
	color: inherit;
	text-align: center;
	line-height: 90px;

	:hover {
	  background-color: #4e5d6c;
	  color: white;
	}
`

class Navigation extends Component {
  	render() {
    	return (
      		<NavigationWrapper>
      			<Logo>
      				<Face></Face>
      				<TextWrapper>
      					<Title>Michał Kalinowski</Title>
      					<Text>WEB DEVELOPER</Text>
      				</TextWrapper>
      			</Logo>
      			<Links>
      				<List>
      					<ListElement><Link href="#about">ABOUT</Link></ListElement>
      					<ListElement><Link href="#projects">PROJECTS</Link></ListElement>
      					<ListElement><Link href="#contact">CONTACT</Link></ListElement>
      				</List>
      			</Links>
      		</NavigationWrapper>
    	);
  	}
}

export default Navigation;