import React from 'react';
import { UnderLineBlue, RadiusButton } from '../../styled-components/page1';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import headerimg from '../../assets/header-img.png';
import { positions } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
	root: {
		width: '90%',
		backgroundColor: '#f1f',
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
		<Grid container spacing={0} justify="center" backgroundColor="#f1f">
			<Grid item xs={6}>
				<p
					style={{
						color: '#2FE0F1',
						fontSize: 78,
						fontWeight: 'bold',
						marginLeft: 200,
					}}
				>
					Ar condicionado
				</p>
				<p
					style={{
						color: '#0B81BB',
						fontSize: 75,
						fontWeight: '300',
						marginLeft: 200,
						marginTop: -80,
					}}
				>
					do jeito certo
				</p>
				<p
					style={{
						color: '#393939',
						fontSize: 30,
						fontWeight: '300',
						marginLeft: 200,
						marginTop: -30,
					}}
				>
					A CHD foca na engenharia para trazer a melhor
				</p>
				<p
					style={{
						color: '#393939',
						fontSize: 30,
						fontWeight: '300',
						marginLeft: 200,
						marginTop: -30,
					}}
				>
					solução em ar-condicionado do mercado
				</p>
				<RadiusButton color="inherit">Peça uma proposta</RadiusButton>
			</Grid>
			<Grid item xs={6}>
				<img alt="header-img" src={headerimg} />
			</Grid>
			<UnderLineBlue />
		</Grid>
	);
}
