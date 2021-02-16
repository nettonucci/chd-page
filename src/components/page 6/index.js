import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#01436A',
		width: '100%',
		height: 'auto',
	},
}));

export default function Page6() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<p>Page 6</p>
		</div>
	);
}
