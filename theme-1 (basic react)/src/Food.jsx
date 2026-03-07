function Food() {
	const food1 = 'Orange'
	const food2 = 'Banana'
	const food3 = 'Mandarin'
	const food4 = 'Limon'
	return (
		<>
			<ul>
				<li>Apple</li>
				<li>{food1}</li>
				<li>{food2.toLocaleUpperCase()}</li>
				<li>{food3.toUpperCase()}</li>
				<li>{food4.toLocaleLowerCase()}</li>
			</ul>
		</>
	)
}
export default Food
