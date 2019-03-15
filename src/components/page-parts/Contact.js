import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/Button'

const ContactWrapper = styled.footer`
`

const ContactTopWrapper = styled.address`
	padding: 80px 0;
  border-top: 1px solid #1A1A1A;
  border-bottom: 1px solid #1A1A1A;
  font-style: normal;
`

const ContactBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  line-height: 100px;
`

const Title = styled.div`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-weight: normal;

  @media ${props => props.theme.layout.tablet} {
    font-size: 24px;
  }
`

const EmailLink = styled(Button)`
  font-size: 20px;
  font-weight: normal;

  @media ${props => props.theme.layout.tablet} {
    font-size: 24px;
  }
`

const Logo = styled.div`
  color: ${props => props.theme.color.title};
  display: none;

  @media (min-width: 350px) { /*Need to display:none or the design won't be pretty :(*/
    display: block;
  }
`

const RightGroupWrapper = styled.div`
  color: ${props => props.theme.color.text};
  display: flex;
`

// This div is needed so that border-right in child will look good
const DesignedBy = styled.div`
`

const DesignedLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 13px;
  padding-right: 10px;
  border-right: 1px solid #1A1A1A;
  :hover {
    color: ${props => props.theme.color.accent};
  };

  @media ${props => props.theme.layout.tablet} {
    padding-right: 30px;
  }
`

const LinksGroup = styled.address`
  display: flex;
  font-style: normal;

  @media ${props => props.theme.layout.tablet} {
    padding-left: 10px;
  }
`

const Link = styled.a`
  padding-left: 10px;
  font-size: 13px;
  color: inherit;
  text-decoration: none;

  @media ${props => props.theme.layout.tablet} {
    padding-left: 20px;
  }

  :hover {
    color: ${props => props.theme.color.accent}
  }
`

class Contact extends Component {
  	render() {
    	return (
      		<ContactWrapper id="contact">
            <ContactTopWrapper>
              <Title className="wow fadeInUp">
                To get in touch, <br />
                just write to <EmailLink text="hi@devmike.pro" url="mailto:hi@devmike.pro"/>
              </Title>
            </ContactTopWrapper>
            <ContactBottomWrapper>
              <Logo>devMike</Logo>
              <RightGroupWrapper>
                <DesignedBy>
                  <DesignedLink 
                    href="http://kalin.pl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    dsgn by kln
                  </DesignedLink>
                </DesignedBy>
                <LinksGroup>
                  <Link 
                    href="https://www.linkedin.com/in/micha%C5%82-kalinowski-3b354715a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </Link>
                  <Link 
                    href="https://github.com/MikeKalinowski/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                  github
                  </Link>
                </LinksGroup>
              </RightGroupWrapper>
            </ContactBottomWrapper>
      		</ContactWrapper>
    	);
  	}
}

export default Contact;