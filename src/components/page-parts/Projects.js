import React, { Component } from 'react';
import styled from 'styled-components'

import projects from '../../assets/projects.json'
import Button from '../common/Button'


const ProjectsWrapper = styled.div`
	padding: ${props => props.theme.layout.wrapperPaddingDesktop};

	// Reversing order of image and text in projects for every second project. 2n+1 says to start by omitting the MainTitle div
	div:nth-child(2n+1) {
		flex-direction: row-reverse;
	}

	// Offseting images
	#image0 {
		transform: translate3d(53px, 48px, 0);
	}
	#image1 {
		transform: translate3d(-47px, 88px, 0);
	}
	#image2 {
		transform: translate3d(60px, 110px, 0);
	}
`

const MainTitle = styled.div`
	color: ${props => props.theme.color.title};
`

const SingleProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 90px 0 120px 0;
`

const ImagesWrapper = styled.div`
	position: relative;

	:hover img:nth-child(1) {
		opacity: 1;
		z-index: 2;
	}
	:hover img:nth-child(2) {
		opacity: 0.3;
		z-index: 1;
	}
`

const Image1 = styled.img`
	position: relative;
	background-color: grey;
	border-radius: 10px;
	opacity: 0.3;
	transition: all 0.7s ease-out;
`

const Image2 = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	background-color: grey;
	border-radius: 10px;
	transition: all 0.7s ease-out;
`

const Description = styled.div`
	width: 360px;
`

const Title = styled.div`
	font-size: 24px;
	color: ${props => props.theme.color.title}
`

const Text = styled.div`
	padding-top: 20px;
	font-size: 13px;
`

const TagsWrapper = styled.div`
	padding-top: 20px;
	display: flex;
	flex-wrap: wrap;
`

const Tag = styled.div`
	padding: 3px 6px;
	background: #121212;
	border-radius: 5px;
	margin-right: 8px;
	margin-bottom: 8px;
	font-size: 12px;
	font-weight: bold;
`

const ButtonsWrapper = styled.div`
	padding-top: 20px;
	display: flex;
	flex-wrap: wrap;
`

const StyledButton = styled(Button)`
	margin-right: 24px;
`

class Projects extends Component {
	pickImage = (image) => {
		switch (image) {
			case 'chat1': return require('../../assets/chat1.png');
			case 'chat2': return require('../../assets/chat2.png');
  			case 'gatsby1': return require('../../assets/gatsby1.png');
  			case 'gatsby2': return require('../../assets/gatsby2.png');
  			case 'rpg1': return require('../../assets/rpg1.png');
  			case 'rpg2': return require('../../assets/rpg2.png');
  			default: return "";
		}
	}

	render() {
	    return (
	      	<ProjectsWrapper id="projects">
	      		<MainTitle>Projects</MainTitle>
	      		{projects.map((project, index) => {
	      			return (
		      			<SingleProjectWrapper key={project.title} id="projectWrapper">
		      				<a href={project.links[0].address} target="_blank" rel="noopener noreferrer">
		      					<ImagesWrapper>
		      						<Image1 src={this.pickImage(project.image1)} />
		      						<Image2 src={this.pickImage(project.image2)} id={"image" + index}/> {/*id is added to offset image*/}					
		      					</ImagesWrapper>
		      				</a>
		      				<Description>
		      					<Title>
		      						{project.title}
		      					</Title>
		      					<Text>
		      						{project.text}
		      					</Text>
		      					<TagsWrapper>
		      						{project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
		      					</TagsWrapper>
		      					<ButtonsWrapper>
		      						{project.links.map(link => 
		      							<StyledButton text={link.name} url={link.address} leadsOutside={true} key={link.name}/>
		      						)}	
		      					</ButtonsWrapper>
		      				</Description>
		      			</SingleProjectWrapper>
		      	 	) 
	      		})} 
	      	</ProjectsWrapper>
	    );
	}
}

export default Projects;