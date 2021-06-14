import React from 'react';

const Input = ({ type, className, name, onChange, placeholder, value }) => {
	return (
		<>
			<input
				type={type}
				className={className}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</>
	);
};
export { Input };
