import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import sobre_img from '../../assets/sobre-img.png';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#01436A',
		width: '100%',
		height: 335,
		textAlign: 'start',
		paddingTop: 10,
		paddingBottom: 140,
	},
}));

export default function Page3() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<Grid container spacing={0} justify="center">
				<Grid item xs={6}>
					<img
						src={sobre_img}
						style={{
							position: 'absolute',
							width: 600,
							height: 485,
							marginTop: -10,
							// marginLeft: 10,
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<h1
						style={{
							fontSize: 50,
							fontWeight: 'bold',
							color: '#2FE0F1',
							marginBottom: 50,
						}}
					>
						Um pouco sobre a CHD
					</h1>

					<a style={{ color: '#FFFFFF' }}>
						Com mais de 20 anos no mercado de Ar Condicionado,
					</a>
					<br />
					<a style={{ color: '#FFFFFF' }}>
						somos uma empresa de engenharia, que realiza instalações,
					</a>
					<br />
					<a style={{ color: '#FFFFFF' }}>
						manutenções corretivas e preventivas no ramo de climatização.
					</a>
					<br />
					<br />
					<a style={{ color: '#FFFFFF' }}>
						Prezando sempre pela qualidade e serviço
					</a>
					<br />
					<a style={{ color: '#FFFFFF' }}>
						diferenciado, a CHD é credenciada pelas marcas Daikin,
					</a>
					<br />

					<a style={{ color: '#FFFFFF' }}>
						Hitachi, Mitsubishi, LG, Samsung e Toshiba. Com uma
					</a>
					<br />

					<a style={{ color: '#FFFFFF' }}>
						equipe altamente qualificada de engenheiros, projetistas e
					</a>
					<br />

					<a style={{ color: '#FFFFFF' }}>
						duteiros, focamos em instalações residenciais e comerciais.
					</a>
					<br />
					<br />
					<a style={{ color: '#FFFFFF' }}>
						Atendemos clientes como McDonald´s, Starbucks, Construtora
					</a>
					<br />
					<a style={{ color: '#FFFFFF' }}>
						Santa Luiza, entre outros. Confira nossa lista completa de clientes.
					</a>
				</Grid>
			</Grid>
		</div>
	);
}
