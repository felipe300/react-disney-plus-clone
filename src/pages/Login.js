import React from 'react';
import styled from 'styled-components';

const Login = () => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src='/images/cta-logo-one.svg' alt='logo-one' />
					<SignUp>get all there</SignUp>
					<Description>
						Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
						subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will
						increase by $1.
					</Description>
					<CTALogoTwo src='/images/cta-logo-two.png' alt='logo-two' />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: grid;
	flex-direction: column;
	place-items: center;
	height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	height: 100%;
	box-sizing: border-box;
	display: grid;
	justify-content: center;
	flex-direction: column;
	padding: 15em 2.5em;
`;

const BgImage = styled.div`
	height: 100%;
	background-image: url('/images/login-background.jpg');
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	z-index: -1;
`;

const CTA = styled.div`
	display: grid;
	place-content: center;
	max-width: 40.625em;
	width: 100%;
`;

const CTALogoOne = styled.img`
	margin-bottom: 0.75em;
	min-height: 0.0625em;
	max-width: 37.5em;
	width: 100%;
	display: block;
`;

const SignUp = styled.a`
	font-size: 1.125em;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.09375em;
	color: hsl(0, 0%, 98%);
	background-color: hsl(204, 100%, 32%);
	margin-bottom: 0.75em;
	width: 100%;
	padding: 1.03125em;
	border: 0.09375em solid transparent;
	border-radius: 0.25em;
	cursor: pointer;

	&:hover {
		background-color: hsl(207, 97%, 47%);
	}
`;

const Description = styled.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-size: 0.6875em;
	margin: 0 0 1.5em;
	line-height: 1.5;
	letter-spacing: 0.09375em;
`;

const CTALogoTwo = styled.img`
	max-width: 37.5em;
	width: 100%;
	margin-bottom: 21.5em;
	display: inline-block;
	vertical-align: bottom;
`;

export default Login;
