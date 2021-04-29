import React from 'react';
import styled from 'styled-components';

const Home = () => {
	return <Container>Homepage</Container>;
};

export default Home;

const Container = styled.section`
	overflow: hidden;
	display: grid;
	flex-direction: column;
	place-items: center;
	height: 100vh;
`;
