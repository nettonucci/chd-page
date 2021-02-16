import React from 'react';
import { UnderLineBlue } from '../../styled-components/page1';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import headerimg from '../../assets/header-img.png';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function Page1() {
	const preventDefault = event => event.preventDefault();
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();

	const handleChange = event => {
		setSpacing(Number(event.target.value));
	};

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<p>Ar condicionado</p>
					<p>do jeito certo</p>
					<p>
						A CHD foca na engenharia para trazer a melhor solução em
						ar-condicionado do mercado
					</p>
					<p>Peça uma proposta</p>
				</Grid>
				<Grid item xs={6}>
					<img
						alt="header-img"
						style={{
							alignSelf: 'flex-end',
						}}
						src={headerimg}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
