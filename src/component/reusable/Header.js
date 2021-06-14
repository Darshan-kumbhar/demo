import React from 'react';

const Header = (props) => {
	return (
		<>
			<h1>{props.HeaderText}</h1>
			<h3>{props.Title}</h3>
		</>
	);
};
export { Header };
