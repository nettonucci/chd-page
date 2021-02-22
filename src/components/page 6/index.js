import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#01436A',
		width: '100%',
		height: 'auto',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 100,
	},
}));

export default function Page6() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<Grid container spacing={0} justify="center">
				<Grid item xs={4}>
					<div
						style={{
							textAlign: 'start',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div>
							<h1 style={{ color: '#fff' }}>Serviços e soluções</h1>
							<a style={{ color: '#fff' }}>Instalação de ar condicionado</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Consultoria</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Engenharia e projetos</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Manutenção de ar condicionado</a>
						</div>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div
						style={{
							textAlign: 'start',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div>
							<h1 style={{ color: '#fff' }}>Parceiros credenciados</h1>
							<a style={{ color: '#fff' }}>Daikin</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Hitachi</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>LG</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Samsung</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Mitsubishi</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>Toshiba</a>
						</div>
					</div>
				</Grid>
				<Grid item xs={4}>
					<div
						style={{
							textAlign: 'start',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<div>
							<h1 style={{ color: '#fff' }}>Fale com a CHD hoje</h1>
							<a style={{ color: '#fff' }}>
								Rua Benedito Guedes de Oliveira, 471
							</a>
							<br />
							<a style={{ color: '#fff' }}>Vila das Palmeiras - SP</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>(11) 3933-3535</a>
							<br />
							<br />
							<a style={{ color: '#fff' }}>comercial@chdservice.com.br</a>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
