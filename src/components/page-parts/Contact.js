import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../common/Button'

const ContactWrapper = styled.div`
`



const ContactTopWrapper = styled.div`
	padding: 80px;
  border-top: 1px solid #1A1A1A;
  border-bottom: 1px solid #1A1A1A;
`

const ContactBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  line-height: 100px;
`

const Title = styled.div`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-weight: normal;
`

const EmailLink = styled(Button)`
  font-size: 24px;
  font-weight: normal;
`

const Logo = styled.div`
  color: ${props => props.theme.color.title};
`

const RightGroupWrapper = styled.div`
  color: ${props => props.theme.color.text};
  display: flex;
`

const DesignedBy = styled.div`
`

const DesignedLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding-right: 30px;
  border-right: 1px solid #1A1A1A;
  :hover {
    color: ${props => props.theme.color.accent};
  };
`

const LinksGroup = styled.div`
  display: flex;
  padding-left: 10px;
`

class Contact extends Component {
  	render() {
    	return (
      		<ContactWrapper id="contact">
            <ContactTopWrapper>
              <Title>
                To get in touch, <br />
                just write to <EmailLink text="hi@devmike.pro" url="mailto:hi@devmike.pro"/>
              </Title>
            </ContactTopWrapper>
            <ContactBottomWrapper>
              <Logo>devMike</Logo>
              <RightGroupWrapper>
                <DesignedBy><DesignedLink href="http://kalin.pl" target="_blank" rel="noopener noreferrer">dsgn by kln</DesignedLink></DesignedBy>
                <LinksGroup>Links go here</LinksGroup>
              </RightGroupWrapper>
            </ContactBottomWrapper>
      		</ContactWrapper>
    	);
  	}
}

export default Contact;