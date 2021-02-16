import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from './assets/logo1.png';
import { RadiusButton, TextButton } from './styled-components/app';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		height: 178,
		width: 'auto',
		backgroundColor: '#fff',
	},
	links: {
		fontSize: 20,
		color: '#707070',
		opacity: 1,
		marginRight: 30,
	},
	logo: {
		marginLeft: 140,
	},
	title: {
		flexGrow: 1,
	},
}));

export default function App() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<img alt="logo" className={classes.logo} src={logo} />
					<div className={classes.title} />
					<Link href="#" className={classes.links} onClick={preventDefault}>
						Início
					</Link>
					<Link href="#" className={classes.links} onClick={preventDefault}>
						Clientes
					</Link>
					<Link href="#" className={classes.links} onClick={preventDefault}>
						Serviços e Soluções
					</Link>
					<Link href="#" className={classes.links} onClick={preventDefault}>
						Obras
					</Link>
					<RadiusButton color="inherit">Peça uma proposta</RadiusButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
