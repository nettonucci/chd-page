import styled from 'styled-components';

import { Button } from '@material-ui/core';

export const RadiusButton = styled(Button)`
	background: #2fe0f1 0% 0% no-repeat padding-box;
	border-radius: 33px;
	padding-left: 10px;
	padding-right: 10px;
	opacity: 1;
	color: #003d63;
	margin-right: 150px;
	font-weight: bold;
	transition: 0.5s all ease-out;
	&:hover {
		background-color: #003d63;
		color: white;
	}
`;

export const TextButton = styled.p`
	/* text-align: left; */
	/* font: normal normal bold 20px/30px Poppins; */
	/* letter-spacing: 0px; */
	/* color: #003d63; */
	/* opacity: 1; */
`;
