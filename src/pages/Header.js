import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserName,
	selectUserPhoto,
	setUserLoginDetails,
} from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import styled from 'styled-components';
import { NavIcons } from '../data/data';

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	const handleAuth = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				setUser(result.user);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const setUser = (user) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	return (
		<Container>
			<Logo>
				<img src='/images/logo.svg' alt='Disney+' />
			</Logo>
			{!userName ? (
				<LoginButton onClick={handleAuth}>login</LoginButton>
			) : (
				<>
					<NavMenu>
						{NavIcons.map((item) => {
							const { id, path, image, alt, title } = item;
							return (
								<a key={id} href={path}>
									<img src={image} alt={alt} />
									<span>{title}</span>
								</a>
							);
						})}
					</NavMenu>
					<UserImg src={userPhoto} alt={userName}></UserImg>
				</>
			)}
		</Container>
	);
};

const Container = styled.section`
	position: fixed;
	height: 4.375em;
	background-color: hsl(228, 36%, 5%);
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.25em;
	letter-spacing: 1em;
	z-index: 3;
`;

const Logo = styled.a`
	padding: 0;
	width: 5em;
	margin-top: 0.25em;
	max-height: 4.375em;
	/* font-size: 0; */
	display: inline-block;

	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	margin: 0;
	margin-right: auto;
	margin-left: 1.5625em;
	padding: 0;
	position: relative;

	a {
		display: flex;
		align-items: center;
		padding: 0 0.75em;

		img {
			height: 1.25em;
			min-width: 1.25em;
			width: 1.25em;
			z-index: auto;
		}

		span {
			text-transform: uppercase;
			color: hsl(0, 0%, 98%);
			font-size: 0.75em;
			letter-spacing: 0.0625em;
			line-height: 1.08;
			padding: 0.125em 0em;
			white-space: nowrap;
			position: relative;

			&:before {
				background-color: hsl(0, 0%, 98%);
				border-radius: 0em 0em 0.25em 0.25em;
				bottom: -0.375em;
				content: '';
				height: 0.125em;
				opacity: 0;
				position: absolute;
				right: 0em;
				left: 0em;
				transform-origin: left center;
				transform: scalex(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				width: auto;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}

	@media (max-width: 48em) {
		display: none;
	}
`;

const UserImg = styled.img`
	height: 100%;
	border-radius: 2.5em;
`;

const LoginButton = styled.a`
	background-color: hsla(0, 0%, 0%, 0.6);
	padding: 0.5em 1em;
	text-transform: uppercase;
	letter-spacing: 0.09375em;
	border: 0.0625em solid hsl(100, 100%, 100%);
	border-radius: 0.25em;
	transition: all 0.2s ease 0s;
	cursor: pointer;

	&:hover {
		background-color: hsla(100, 100%, 100%);
		color: hsl(0, 0%, 0%);
		border-color: transparent;
	}
`;

export default Header;
