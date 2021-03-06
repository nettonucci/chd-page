import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const UnderLineBlue = styled.div`
	/* position: absolute; */
	/* top: 600px; */
	background-color: #0b81bb;
	width: 100%;
	height: 20px;
	z-index: -1;
`;

export const RadiusButton = styled(Button)`
	background: #2fe0f1 0% 0% no-repeat padding-box;
	border-radius: 33px;
	padding: 10px;
	margin-left: 100px;
	opacity: 1;
	color: #003d63;
	margin-right: 150px;
	font-size: 20px;
	font-weight: bold;
	transition: 0.5s all ease-out;
	&:hover {
		background-color: #003d63;
		color: white;
	}
`;
