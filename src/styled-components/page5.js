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
	padding: 10px;
	border-width: 2px;
	border-style: solid;
	border-color: #fff;
	opacity: 1;
	color: #fff;
	font-size: 25px;
	font-weight: bold;
	transition: 0.5s all ease-out;
	&:hover {
		background-color: #fff;
		color: #000;
	}
`;
