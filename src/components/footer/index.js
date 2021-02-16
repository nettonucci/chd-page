import React from 'react';
import { Footer, Text } from '../../styled-components/footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#fff',
		textAlign: 'center',
		width: '100%',
		height: 100,
		paddingTop: 65,
	},
}));

export default function Page1() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<Text>CHD Sistemas de Ar Condicionado e Instalações | 2021</Text>
		</div>
	);
}
