import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#fff',
		width: '100%',
		height: 'auto',
	},
}));

export default function Page4() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<p>Algunus dos nossos clientes</p>
		</div>
	);
}
