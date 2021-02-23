import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { RadiusButton } from '../../styled-components/page4';

import cli1 from '../../assets/Clientes/Adidas.png';
import cli2 from '../../assets/Clientes/Anbima.png';
import cli3 from '../../assets/Clientes/McDonalds.png';
import cli4 from '../../assets/Clientes/Cinépolis.png';
import cli5 from '../../assets/Clientes/Google.png';
import cli6 from '../../assets/Clientes/BarDoAlemão.png';
import cli7 from '../../assets/Clientes/Itaú.png';
import cli8 from '../../assets/Clientes/Natura.png';
import cli9 from '../../assets/Clientes/Starcbucks.png';
import cli10 from '../../assets/Clientes/Viena.png';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		height: 'auto',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 140,
	},
}));

export default function Page4() {
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
				Alguns dos nossos clientes
			</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					// height: '100vh',
				}}
			>
				<div style={{ width: '90%' }}>
					<Carousel
						slidesPerPage={5}
						slidesPerScroll={5}
						animationSpeed={500}
						autoPlay={3000}
						stopAutoPlayOnHover
						offset={50}
						itemWidth={300}
						clickToChange
						centered
						infinite
					>
						<img src={cli3} />
						<img src={cli9} />
						<img src={cli7} />
						<img src={cli4} />
						<img src={cli5} />
						<img src={cli1} />
						<img src={cli2} />
						<img src={cli8} />
						<img src={cli6} />
						<img src={cli10} />
					</Carousel>
				</div>
			</div>
			<RadiusButton color="inherit">Veja todas as obras</RadiusButton>
		</div>
	);
}
