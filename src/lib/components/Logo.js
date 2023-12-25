import React from 'react';
import './Logo146.css';

// Call this using <Logo146 text="Layout | Design | Code" />

export const Logo146 = (props) => {
	function Home() {
		window.location.href = 'https://www.146.se';
	}
	let size = { transform: `scale(` + props.size + `)` };

	return (
		<div>
			<header>
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

export default Logo146;
