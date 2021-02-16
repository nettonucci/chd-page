import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#01436A',
		width: '100%',
		height: 'auto',
	},
}));

export default function Page3() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<p style={{ color: '#2FE0F1' }}>Um pouco sobre a CHD</p>
		</div>
	);
}
