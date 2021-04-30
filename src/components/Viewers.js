import React from 'react';
import styled from 'styled-components';
import { viewersData } from '../data/ViewersData';

const Viewers = () => {
	return (
		<Container>
			{viewersData.map((item) => {
				const { alt, id, image, video } = item;
				return (
					<Wrap key={id}>
						<img src={image} alt={alt} />
						<video autoPlay={true} loop={true} playsInline={true}>
							<source src={video} type='video/mp4' />
						</video>
					</Wrap>
				);
			})}
		</Container>
	);
};

export default Viewers;

const Container = styled.section`
	margin-top: 1.875em;
	padding: 1.875 0em 1.625em;
	display: grid;
	grid-gap: 1.5625em;
	gap: 1.5625em;
	grid-template-columns: repeat(5, minmax(0, 1fr));

	@media (max-width: 48em) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
`;

const Wrap = styled.div`
	padding-top: 56.25%;
	border-radius: 0.625em;
	box-shadow: rgb(0 0 0 / 69%) 0em 1.625em 1.875em -0.625em,
		rgb(0 0 0 / 73%) 0em 1em 0.625 -0.625em;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border: 0.1875em solid hsla(0, 0%, 98%, 0.1);

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

	video {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0em;
		opacity: 0;
		z-index: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0em 2.5em 3.625em -1em,
			rgb(0 0 0 / 72%) 0em 1.875em 1.375em -0.625em;
		transform: scale(1.05);
		border-color: hsla(0, 0%, 98%, 0.8);

		video {
			opacity: 1;
		}
	}
`;
