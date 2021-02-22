import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import icon_inst from '../../assets/icon-inst.png';
import icon_manu from '../../assets/icon-manut.png';
import icon_eng from '../../assets/icon-eng.png';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: 'auto',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 140,
	},
}));

export default function Page2() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<h1
				style={{
					fontSize: 50,
					fontWeight: 'bold',
					color: '#003D63',
					marginBottom: 100,
				}}
			>
				Serviços e soluções em ar condicionado
			</h1>
			<Grid container spacing={0} justify="center">
				<Grid item xs={4}>
					<img src={icon_inst} style={{ width: 100, height: 100 }} />
					<h3 style={{ color: '#1D1D1D', marginBottom: 50 }}>Instalações</h3>
					<a style={{ color: '#484848' }}>
						Climatização e implementação de Split Systems,
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						Multi Split, Self Contained, Chiller e Sistema VRF.
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						Pressurização de escadas, Ventilação
					</a>
					<br />
					<a style={{ color: '#484848' }}>e Exaustão mecânica.</a>
				</Grid>
				<Grid item xs={4}>
					<img src={icon_manu} style={{ width: 100, height: 100 }} />
					<h3 style={{ color: '#1D1D1D', marginBottom: 50 }}>
						Consultoria e manutenção
					</h3>
					<a style={{ color: '#484848' }}>
						Nossa equipe é composta de pessoal treinado
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						pelos principais fabricantes do ramo. Possuímos
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						um departamento específico para gerenciamento
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						e controle de manutenção preventiva e corretiva.
					</a>
				</Grid>
				<Grid item xs={4}>
					<img src={icon_eng} style={{ width: 100, height: 100 }} />
					<h3 style={{ color: '#1D1D1D', marginBottom: 50 }}>Engenharia</h3>
					<a style={{ color: '#484848' }}>
						CHD trabalha com arquitetos renomados,
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						projetistas, engenheiros e construtoras que
					</a>
					<br />
					<a style={{ color: '#484848' }}>
						atuam no segmento de obras residenciais de
					</a>
					<br />
					<a style={{ color: '#484848' }}>alto padrão, corporativas e varejo</a>
				</Grid>
			</Grid>
		</div>
	);
}
