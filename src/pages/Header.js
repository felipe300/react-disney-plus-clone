import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserName,
	selectUserPhoto,
	setUserLoginDetails,
	setSignOutState,
} from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import styled from 'styled-components';
import { NavIcons } from '../data/data';

const Header = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				setUser(user);
				history.push('/home');
			}
		});
	}, [userName]);

	const handleAuth = () => {
		if (!userName) {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					setUser(result.user);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			auth
				.signOut()
				.then(() => {
					dispatch(setSignOutState());
					history.push('/');
				})
				.catch((err) => console.log(err));
		}
	};

	const handleSignOut = () => {
		console.log('sign out');
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
					<SignOut>
						<UserImg src={userPhoto} alt={userName}></UserImg>
						<DropDown>
							<span onClick={handleAuth}>Sign out</span>
						</DropDown>
					</SignOut>
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
	border-radius: 50%;
	width: 100%;
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

const DropDown = styled.div`
	position: absolute;
	top: 3em;
	right: 0px;
	background: hsl(0, 0%, 7%);
	border: 0.0625em solid hsla(0, 0%, 59%, 0.34);
	border-radius: 4px;
	box-shadow: rgb(0 0 0 / 50%) 0em 0em 1.125em 0em;
	padding: 0.625em;
	font-size: 0.875;
	letter-spacing: 0.1875em;
	width: 7.125em;
	opacity: 0;
`;

const SignOut = styled.div`
	position: relative;
	height: 3em;
	width: 3em;
	display: grid;
	place-content: center;
	cursor: pointer;

	/* ${UserImg} {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	} */
	&:hover {
		${DropDown} {
			opacity: 1;
			transition-duration: 1s;
		}
	}
`;

export default Header;
