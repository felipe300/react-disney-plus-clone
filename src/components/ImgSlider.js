// npm install react-slick
// npm install slick-carousel
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImg } from '../data/slider';

const ImgSlider = () => {
	let settings = {
		dots: true,
		inifinite: true,
		speed: 500,
		slidesToShow: 1,
		SlideToScrool: 1,
		autoplay: true,
	};

	return (
		<Carousel {...settings}>
			{sliderImg.map((slider) => {
				return (
					<Wrap key={slider.id}>
						<a href='/'>
							<img src={slider.image} alt={slider.alt} />
						</a>
					</Wrap>
				);
			})}
		</Carousel>
	);
};

export default ImgSlider;

const Carousel = styled(Slider)`
	margin-top: 1.25em;

	& > button {
		opacity: 0;
		height: 100%;
		width: 5vw;
		z-index: 1;

		&:hover {
			opacity: 1;
			transition: opacity 0.2s ease 0s;
		}
	}

	ul li button {
		&:before {
			color: hsl(217, 11%, 63%);
			font-size: 0.625em;
		}
	}

	li.slick-active button:before {
		color: hsl(0, 0%, 100%);
	}

	.slick-list {
		overflow: initial;
	}

	.slick-prev {
		left: -4.6875em;
	}

	.slick-next {
		right: -4.6875em;
	}
`;

const Wrap = styled.div`
	border-radius: 0.25em;
	cursor: pointer;
	position: relative;
	a {
		border-radius: 0.25em;
		box-shadow: rgb(0 0 0 / 69%) 0em 1.625em 1.875em -0.625em,
			rgb(0 0 0 / 73%) 0em 1em 0.625em -0.625em;
		cursor: pointer;
		display: block;
		position: relative;
		padding: 0.25em;

		img {
			width: 100%;
			height: 100%;
		}

		&:hover {
			padding: 0;
			border: 0.25em solid hsla(0, 0%, 98%, 0.8);
			transition-duration: 300ms;
		}
	}
`;
