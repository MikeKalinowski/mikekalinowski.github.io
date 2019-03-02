import React, { Component } from 'react';
import styled from 'styled-components'
import projects from '../../assets/projects.json'


const ProjectsWrapper = styled.div`
	width: 900px;
	margin: 0 auto;
`

const SingleProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 130px 0px;
	border-bottom: 1px solid #e0e0e0;
	box-shadow: 0px 100px 70px -120px rgba(0,0,0,0.2);
`

const Image = styled.img`
	width: 400px;
	height: 225px;
	background-color: grey;
	box-shadow: 0px 0px 70px rgba(0,0,0,0.15);
`

const Description = styled.div`
	width: 400px;
`

const Title = styled.div`
	font-size: 30px;
`

const Text = styled.div`
	padding-top: 10px;
`

const TagsWrapper = styled.div`
	padding-top: 40px;
	display: flex;
	flex-wrap: wrap;
`

const Tag = styled.div`
	padding: 4px 8px;
	background-color: grey;
	color: white;
	border-radius: 12px;
	margin-right: 8px;
	margin-bottom: 8px;

`

const Buttons = styled.div`
	padding-top: 30px;
	display: flex;
	flex-wrap: wrap;
`

const StyledButton = styled(Tag)`
	background-color: #4e5d6c;
	letter-spacing: 1px;
	box-shadow: 0px 1px 0px 0px #a6827e;
	transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

	:hover {
		background: #FFFFFF;
		border: 1px solid #4e5d6c;
		transform: translateY(-3px);
		color: #4e5d6c;
		box-shadow: 0px 2px 0px 0px #a6827e;
	}

	:active {
		transform: translateY(2px);
		box-shadow: initial;
	}
`

const Link = styled.a`
	text-decoration: none;
	color: inherit;
`

class Projects extends Component {
	pickImage = (image) => {
		switch (image) {
			case 'chat': return require('../../assets/chat.png');
  			case 'gatsby': return require('../../assets/gatsby.png');
  			case 'rpg': return require('../../assets/rpg.png');
  			default: return "";
		}
	}

	render() {
	    return (
	      	<ProjectsWrapper id="projects">
	      		{projects.map(project => {
	      			return (
		      			<SingleProjectWrapper key={project.title}>
		      				<Image src={this.pickImage(project.image)}>
		      				</Image>
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
		      					<Buttons>
		      						<Link href={project.links.website}>
		      							<StyledButton>Website</StyledButton>
		      						</Link>
		      						<Link href={project.links.github}>
		      							<StyledButton>Github</StyledButton>
		      						</Link>
		      					</Buttons>
		      				</Description>
		      			</SingleProjectWrapper>
		      	 	) 
	      		 })} 
	      	</ProjectsWrapper>
	    );
	}
}

export default Projects;