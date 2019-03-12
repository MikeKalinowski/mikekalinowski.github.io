import React, { Component } from 'react';
import styled from 'styled-components'

import projects from '../../assets/projects.json'
import Button from '../common/Button'


const ProjectsWrapper = styled.div`
	padding: ${props => props.theme.layout.wrapperPaddingDesktop};
`

const MainTitle = styled.div`
	color: ${props => props.theme.color.title}
`

const SingleProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 90px 0 60px 0;
`

const Image = styled.img`
	width: 400px;
	height: 225px;
	background-color: grey;
`

const Description = styled.div`
	width: 400px;
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
			case 'chat': return require('../../assets/chatSmall.png');
  			case 'gatsby': return require('../../assets/gatsbySmall.png');
  			case 'rpg': return require('../../assets/rpgSmall.png');
  			default: return "";
		}
	}

	render() {
	    return (
	      	<ProjectsWrapper id="projects">
	      		<MainTitle>Projects</MainTitle>
	      		{projects.map(project => {
	      			return (
		      			<SingleProjectWrapper key={project.title}>
		      				<a href={project.links[0].address}>
		      					<Image src={this.pickImage(project.image)} />
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
		      							<StyledButton text={link.name} url={link.address} key={link.name}/>
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