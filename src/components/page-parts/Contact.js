import React, { Component } from 'react';
import styled from 'styled-components';

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

const emailLink = styled.a`
  font-size: 24px;
  font-weight: normal;
`

const Logo = styled.div`
  color: ${props => props.theme.color.title};
`

const LinksGroupWrapper = styled.div`
  color: ${props => props.theme.color.text};
  display: flex;
`

const Designed = styled.a`
  
`

const LinksGroup = styled.div`
  display: flex;
`

class Contact extends Component {
  	render() {
    	return (
      		<ContactWrapper id="contact">
            <ContactTopWrapper>
              <Title>To get in touch,<br />just write to</Title>
              <emailLink>hi@devmike.pro</emailLink>
            </ContactTopWrapper>
            <ContactBottomWrapper>
              <Logo>devMike</Logo>
              <LinksGroupWrapper>
                <Designed>dsgn by kln</Designed>
                <LinksGroup>Links go here</LinksGroup>
              </LinksGroupWrapper>
            </ContactBottomWrapper>
      		</ContactWrapper>
    	);
  	}
}

export default Contact;