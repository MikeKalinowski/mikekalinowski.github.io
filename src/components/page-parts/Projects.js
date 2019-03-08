import React, { Component } from 'react';
import styled, {css} from 'styled-components'
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
	line-height: 150%;
`

const TagsWrapper = styled.div`
	padding-top: 40px;
	display: flex;
	flex-wrap: wrap;
`

// Mixin made seperately to not repeat styles in Tag and StyledButton
const buttonishMixin = () => 
	css`
		padding: 4px 8px;
		border-radius: 12px;
		margin-right: 8px;
		margin-bottom: 8px;
		
	`

const Tag = styled.div`
	${() => buttonishMixin};
	border: 1px solid #333333;
`

const ButtonsWrapper = styled.div`
	padding-top: 30px;
	display: flex;
	flex-wrap: wrap;
`

const StyledButton = styled.button`
	font-size: 100%;
	font-family: inherit;
	border: none;
	${() => buttonishMixin};
	color: white;
	cursor: pointer;
	border: 1px solid #4e5d6c;
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
			case 'chat': return require('../../assets/chatSmall.png');
  			case 'gatsby': return require('../../assets/gatsbySmall.png');
  			case 'rpg': return require('../../assets/rpgSmall.png');
  			default: return "";
		}
	}

	render() {
	    return (
	      	<ProjectsWrapper id="projects">
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
		      							<Link href={link.address} target="_blank" rel="noopener noreferrer" key={link.address}>
		      								<StyledButton type="button">{link.name}</StyledButton>
		      							</Link>
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