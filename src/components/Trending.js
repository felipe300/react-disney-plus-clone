import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { trendingData } from '../data/trendingData';

const Trending = () => {
	return (
		<Container>
			<h4>trending</h4>
			<Content>
				{trendingData.map((item) => {
					return (
						<Wrap key={item.id}>
							<Link to={item.path}>
								<img src={item.image} alt={item.alt} />
							</Link>
						</Wrap>
					);
				})}
			</Content>
		</Container>
	);
};

export default Trending;

const Container = styled.section`
	padding: 0 0 1.625em;

	h4 {
		text-transform: capitalize;
	}
`;

const Content = styled.div`
	display: grid;
	grid-gap: 1.5625em;
	gap: 1.5625em;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 48em) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

const Wrap = styled.div`
	padding-top: 56.25%;
	border-radius: 0.625em;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0em 1em 0.625em -0.625em;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 0.1875em solid rgba(249, 249, 249, 0.1);

	img {
		inset: 0em;
		display: block;
		height: 100%;
		object-fit: cover;
		opacity: 1;
		position: absolute;
		transition: opacity 500ms ease-in-out 0s;
		width: 100%;
		z-index: 1;
		top: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0em 2.5em 3.625em -1em,
			rgb(0 0 0 / 72%) 0em 1.875em 1.375em -0.625em;
		transform: scale(1.05);
		border-color: hsla(0, 0%, 98%, 0.8);
	}
`;
