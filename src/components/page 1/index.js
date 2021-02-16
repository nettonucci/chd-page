import React from 'react';
import { UnderLineBlue } from '../../styled-components/page1';
import headerimg from '../../assets/header-img.png';

export default function page1() {
	const preventDefault = event => event.preventDefault();

	return (
		<div>
			<div>
				<p>Ar condicionado</p>
				<p>do jeito certo</p>
				<p>
					A CHD foca na engenharia para trazer a melhor solução em
					ar-condicionado do mercado
				</p>
				<p>Peça uma proposta</p>
			</div>
			<div>
				<img
					alt="header-img"
					style={{
						alignSelf: 'flex-end',
					}}
					src={headerimg}
				/>
			</div>
			<div
				style={{
					position: 'absolute',
					backgroundColor: '#0b81bb',
					width: '100%',
					height: 20,
					bottom: 220,
				}}
			/>
		</div>
	);
}
