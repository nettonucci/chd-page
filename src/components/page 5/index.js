import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#fff',
		width: '100%',
		height: 'auto',
	},
}));

export default function Page5() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<p>Seja nosso parceiro</p>
		</div>
	);
}
