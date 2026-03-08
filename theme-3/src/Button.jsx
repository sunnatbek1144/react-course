function Button() {
	const styles = {
		border: 'none',
		borderRadius: '5px',
		padding: '10px 20px',
		backgroundColor: 'blue',
		cursor: 'pointed',
	}

	return (
		<div className='button'>
			<button style={styles}>Click Me</button>
		</div>
	)
}
export default Button
