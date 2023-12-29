import React, { useEffect, useState } from 'react';

export const Logo = (props) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		// Uppdatera isClient till true när komponenten mountas på klienten
		setIsClient(true);
	}, []);

	function Home() {
		if (isClient) {
			// Eftersom vi är på klient-sidan kan vi säkert använda window-objektet
			window.location.href = 'https://www.146.se';
		}
	}

	let size = { transform: `scale(${props.logosize})` };
	let headerstyle = {
		marginTop: props.margin.split(',')[0],
		marginBottom: props.margin.split(',')[1],
	};

	return (
		<div>
			<header style={headerstyle}>
				<h1 onClick={Home} style={size}>
					14<span className="reverse">6</span>
					<span className="small">
						.S<span className="rotate">E</span>
					</span>
				</h1>
				<h2 className="slogan">{props.text}</h2>
			</header>
		</div>
	);
};

export default Logo;
