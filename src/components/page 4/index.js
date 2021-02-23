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

import seta_dir from '../../assets/seta-dir.png';
import seta_esq from '../../assets/seta-esq.png';

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
				<div style={{ width: '85%' }}>
					<Carousel
						slidesPerPage={4}
						slidesPerScroll={1}
						animationSpeed={500}
						autoPlay={5000}
						stopAutoPlayOnHover
						offset={30}
						itemWidth={270}
						clickToChange
						// centered
						infinite
						arrowLeft={
							<img
								src={seta_esq}
								style={{ width: 50, height: 50, cursor: 'pointer' }}
							/>
						}
						arrowRight={
							<img
								src={seta_dir}
								style={{ width: 50, height: 50, cursor: 'pointer' }}
							/>
						}
						addArrowClickHandler={true}
					>
						<img src={cli3} style={{ width: 150, height: 150 }} />
						<img src={cli9} style={{ width: 150, height: 150 }} />
						<img src={cli7} style={{ width: 150, height: 150 }} />
						<img src={cli4} style={{ width: 200, height: 200 }} />
						<img src={cli5} style={{ width: 200, height: 200 }} />
						<img src={cli1} style={{ width: 200, height: 200 }} />
						<img src={cli2} style={{ width: 200, height: 200 }} />
						<img src={cli8} style={{ width: 200, height: 200 }} />
						<img src={cli6} style={{ width: 200, height: 200 }} />
						<img src={cli10} style={{ width: 200, height: 200 }} />
					</Carousel>
				</div>
			</div>
			<RadiusButton color="inherit">Veja todas as obras</RadiusButton>
		</div>
	);
}
