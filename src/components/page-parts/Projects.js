import React, { Component } from 'react';
import styled from 'styled-components'
import Rellax from 'rellax';

import projects from '../../assets/projects.json'
import Button from '../common/Button'


const ProjectsWrapper = styled.section`
	padding: 80px 0 40px;

	@media ${props => props.theme.layout.tablet} {
		padding: ${props => props.theme.layout.wrapperPaddingDesktop};
  	}

	// Reversing order of image and text in projects for every second project. 2n+1 says to start by omitting the MainTitle div
	div:nth-child(2n+1) {
		flex-direction: row-reverse;
	}

	// Offseting images
	#image0 {
		transform: translate3d(26px, 30px, 0);

		@media (min-width: 350px) {
			transform: translate3d(53px, 48px, 0);
  		}
	}
	#image1 {
		transform: translate3d(-23px, 54px, 0);

		@media (min-width: 350px) {
			transform: translate3d(-47px, 88px, 0);
  		}
	}
	#image2 {
		transform: translate3d(30px, 65px, 0);

		@media (min-width: 350px) {
			transform: translate3d(60px, 110px, 0);
  		}
	}

	// Adding padding according to image move
	#correction0 {
		margin: 0 26px 30px 0;

		@media (min-width: 350px) {
			margin: 0 53px 48px 0;
  		}
	}
	#correction1 {
		margin: 0 0 54px 23px;

		@media (min-width: 350px) {
			margin: 0 0 88px 47px;
  		}
	}
	#correction2 {
		margin: 0 30px 65px 0;

		@media (min-width: 350px) {
			margin: 0 60px 110px 0;
  		}
	}

`

const MainTitle = styled.h1`
	font-size: 1em;
  	margin: 0;
 	font-weight: 500;
	color: ${props => props.theme.color.title};
`

const SingleProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 60px 0 40px;

	@media ${props => props.theme.layout.tablet} {
		padding: 90px 0 90px 0;
  	}
`

const ImagesWrapper = styled.div`
	position: relative;
`

const Image1 = styled.img`
	position: relative;
	background-color: grey;
	border-radius: 10px;
	opacity: 0.3;
	transition: opacity, z-index;
	transition-duration: 0.5s;
	transition-timing-function: ease-out;
	width: 65vw
	max-width: 340px;
	max-height: 220px;
	@media (min-width: 768px) {
		width: 340px;
  	}
`

const Image2 = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	background-color: grey;
	border-radius: 10px;
	transition: opacity, z-index;
	transition-duration: 0.5s;
	transition-timing-function: ease-out;
	width: 65vw
	max-width: 340px;
	max-height: 220px;
	@media (min-width: 768px) {
		width: 340px;
  	}
`

const Description = styled.div`
	width: 380px;
	padding-top: 40px;

	@media ${props => props.theme.layout.tablet} {
		padding-top: 0;
  	}
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
	justify-content: flex-end;
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
	componentDidMount() {
	    this.rellaxProj = new Rellax('.rellaxProj')
	}

	pickImage = (image) => {
		switch (image) {
			case 'chat1': return require('../../assets/chat1.png');
			case 'chat2': return require('../../assets/chat2.png');
  			case 'gatsby1': return require('../../assets/gatsby1.png');
  			case 'gatsby2': return require('../../assets/gatsby2.png');
  			case 'rpg1': return require('../../assets/rpg1.png');
  			case 'rpg2': return require('../../assets/rpg2.png');
  			default: return '';
		}
	}

	render() {
	    return (
	      	<ProjectsWrapper id="projects">
	      		<MainTitle>Projects</MainTitle>
	      		{projects.map((project, index) => {
	      			return (
		      			<SingleProjectWrapper key={project.title} id="projectWrapper">
	      					<ImagesWrapper className="rellaxProj" data-rellax-speed="-0.6" data-rellax-percentage="0.7">
	      						<Image1 
	      							src={this.pickImage(project.image1)} 
	      							id={'correction' + index}
	      							role="presentation"
	      							className="rellaxProj" data-rellax-speed="-0.7" data-rellax-percentage="0.5"
	      						/>  {/*id is added to correct Image2 translation with padding*/}
	      						<Image2 
	      							src={this.pickImage(project.image2)} 
	      							id={'image' + index}
	      							role="presentation"
	      						/> 	{/*id is added to translate image*/}
	      					</ImagesWrapper>
		      				<Description className="wow fadeInUpSmall"> 
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
		      							<StyledButton 
		      								text={link.name} 
		      								url={link.address} 
		      								leadsOutside={true} 
		      								key={link.name}
		      							/>
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