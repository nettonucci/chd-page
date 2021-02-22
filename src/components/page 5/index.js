import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mequi from '../../assets/mequi1000.jpg';
import { RadiusButton } from '../../styled-components/page5';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: '#fff',
		width: '100%',
		textAlign: 'center',
	},
}));

export default function Page5() {
	const classes = useStyles();
	const preventDefault = event => event.preventDefault();

	return (
		<div
			className={classes.root}
			style={{
				backgroundImage: `url(${mequi})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				width: '100%',
				height: 850,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<div>
					<p style={{ fontSize: 50, color: '#fff', fontWeight: 'bold' }}>
						Seja nosso parceiro
					</p>
					<RadiusButton color="inherit">Peça uma proposta</RadiusButton>
				</div>
			</div>
		</div>
	);
}
