import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const UnderLineBlue = styled.div`
	/* position: absolute;
	top: 500px; */
	background-color: #0b81bb;
	width: 100%;
	height: 20px;
`;

export const RadiusButton = styled(Button)`
	border-radius: 33px;
	margin-top: 120px;
	padding: 10px;
	border-width: 2px;
	border-style: solid;
	border-color: #2fe0f1;
	opacity: 1;
	color: #003d63;
	font-size: 25px;
	font-weight: bold;
	transition: 0.5s all ease-out;
	&:hover {
		background-color: #003d63;
		border-color: #003d63;
		color: #fff;
	}
`;
