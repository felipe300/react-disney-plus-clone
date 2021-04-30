import React from 'react';
import styled from 'styled-components';
import ImgSlider from '../components/ImgSlider';

const Home = () => {
	return (
		<Container>
			<ImgSlider />
		</Container>
	);
};

export default Home;

const Container = styled.section`
	position: relative;
	min-height: calc(100vh - 15.625em);
	overflow-x: hidden;
	display: block;
	top: 4.5em;
	padding: 0 calc(3.5vh + 0.25em);

	&:after {
		background: url('/images/home-background.png') center center / cover no-repeat fixed;
		content: '';
		position: absolute;
		inset: 0em;
		opacity: 1;
		z-index: -1;
	}
`;
