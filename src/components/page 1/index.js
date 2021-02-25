/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { UnderLineBlue, RadiusButton } from '../../styled-components/page1';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import headerimg from '../../assets/header-img.png';
import { positions } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#fff',
		width: '100%',
		height: 335,
		paddingTop: 10,
		paddingBottom: 140,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function Page1() {
	const preventDefault = event => event.preventDefault();
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={6}>
					<a
						style={{
							fontSize: 50,
							fontWeight: 'bold',
							color: '#2FE0F1',
							marginLeft: 100,
						}}
					>
						Ar condicionado
					</a>
					<br />
					<a
						style={{
							fontSize: 47,
							color: '#0B81BB',
							marginLeft: 100,
						}}
					>
						do jeito certo
					</a>
					<br />
					<br />
					<br />
					<br />
					<a
						style={{
							fontSize: 20,
							color: '#393939',
							marginLeft: 100,
						}}
					>
						A CHD foca na engenharia para trazer a melhor
					</a>
					<br />
					<a
						style={{
							fontSize: 20,
							color: '#393939',
							marginLeft: 100,
						}}
					>
						solução em ar-condicionado do mercado.
					</a>
					<br />
					<br />
					<br />

					<RadiusButton>Peça uma proposta</RadiusButton>
				</Grid>
				<Grid item xs={6}>
					<div
						style={
							{
								// width: 500,
								// height: 500,
								// backgroundColor: '#f1f',
							}
						}
					>
						<img
							src={headerimg}
							style={{
								position: 'absolute',
								marginTop: -50,
								marginLeft: -70,
								width: 700,
								height: 500,
								// backgroundColor: '#f1f',
							}}
						/>
					</div>
				</Grid>
				<div
					style={{
						/* position: absolute; */
						marginTop: 50,
						backgroundColor: '#0b81bb',
						width: '100%',
						height: 20,
						// zIndex: -1,
					}}
				/>
			</Grid>
		</div>
	);
}
